class UIController {
    constructor() {
        // Cache DOM elements
        this.loadingScreen = document.getElementById('loadingScreen');
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.subjectSelection = document.getElementById('subjectSelection');
        this.quizContainer = document.getElementById('quizContainer');
        this.resultsScreen = document.getElementById('resultsScreen');
        
        // Quiz elements
        this.currentSubjectElement = document.getElementById('currentSubject');
        this.questionCountElement = document.getElementById('questionCount');
        this.questionTextElement = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.timerElement = document.getElementById('timer');
        this.timerCircleFill = document.querySelector('.timer-circle-fill');
        this.progressBar = document.getElementById('progressBar');
        
        // Results elements
        this.finalScoreElement = document.getElementById('finalScore');
        this.correctCountElement = document.getElementById('correctCount');
        this.wrongCountElement = document.getElementById('wrongCount');
        this.skippedCountElement = document.getElementById('skippedCount');
    }
    
    hideLoadingScreen() {
        this.loadingScreen.classList.add('hidden');
        this.welcomeScreen.classList.remove('hidden');
        this.welcomeScreen.classList.add('fade-in');
    }
    
    showWelcomeScreen() {
        this.subjectSelection.classList.add('hidden');
        this.welcomeScreen.classList.remove('hidden');
        this.welcomeScreen.classList.add('slide-in-up');
    }
    
    showSubjectSelection() {
        this.welcomeScreen.classList.add('hidden');
        this.subjectSelection.classList.remove('hidden');
        this.subjectSelection.classList.add('slide-in-right');
    }
    
    showQuizScreen() {
        this.subjectSelection.classList.add('hidden');
        this.quizContainer.classList.remove('hidden');
        this.quizContainer.classList.add('fade-in');
    }
    
    showResults(score, correct, wrong, skipped) {
        this.quizContainer.classList.add('hidden');
        this.resultsScreen.classList.remove('hidden');
        this.resultsScreen.classList.add('fade-in');
        
        // Update results
        this.finalScoreElement.textContent = score;
        this.correctCountElement.textContent = correct;
        this.wrongCountElement.textContent = wrong;
        this.skippedCountElement.textContent = skipped;
        
        // Animate score circle
        this.animateScoreCircle(score);
    }
    
    setSubject(subject) {
        const subjectName = subject.charAt(0).toUpperCase() + subject.slice(1);
        this.currentSubjectElement.textContent = subjectName;
    }
    
    displayQuestion(questionText, options, currentQuestion, totalQuestions) {
        this.questionTextElement.textContent = questionText;
        this.questionCountElement.textContent = `Question ${currentQuestion}/${totalQuestions}`;
        
        // Clear previous options
        this.optionsContainer.innerHTML = '';
        
        // Create new options
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option', 'slide-in-right');
            optionElement.style.animationDelay = `${index * 0.1}s`;
            optionElement.textContent = option;
            this.optionsContainer.appendChild(optionElement);
        });
    }
    
    updateTimer(timeLeft) {
        this.timerElement.textContent = timeLeft;
        
        // Update circle progress
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (timeLeft / 30) * circumference;
        this.timerCircleFill.style.strokeDashoffset = offset;
    }
    
    timerWarning(isCritical) {
        this.timerElement.classList.add('timer-warning');
        if (isCritical) {
            this.timerElement.classList.remove('timer-warning');
            this.timerElement.classList.add('timer-critical');
        }
    }
    
    showFeedback(isCorrect) {
        const feedbackElement = document.createElement('div');
        feedbackElement.classList.add('feedback');
        
        if (isCorrect) {
            feedbackElement.classList.add('correct-feedback');
        } else {
            feedbackElement.classList.add('wrong-feedback');
        }
        
        document.body.appendChild(feedbackElement);
        setTimeout(() => {
            feedbackElement.remove();
        }, 1000);
    }
    
    showTimeUpFeedback() {
        const timeUpElement = document.createElement('div');
        timeUpElement.classList.add('feedback', 'wrong-feedback');
        timeUpElement.textContent = 'Time Up!';
        document.body.appendChild(timeUpElement);
        setTimeout(() => {
            timeUpElement.remove();
        }, 1500);
    }
    
    updateProgress(current, total) {
        const progressPercent = (current / total) * 100;
        this.progressBar.style.width = `${progressPercent}%`;
    }
    
    updateScore(score) {
        // This could be used to show score during quiz if needed
    }
    
    animateScoreCircle(score) {
        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.style.background = `conic-gradient(var(--secondary-color) ${score}%, #eee ${score}%)`;
        
        // Animate the score number
        let currentScore = 0;
        const scoreInterval = setInterval(() => {
            if (currentScore >= score) {
                clearInterval(scoreInterval);
                return;
            }
            currentScore++;
            this.finalScoreElement.textContent = currentScore;
        }, 20);
    }
    
    resetQuizUI() {
        // Reset timer display
        this.timerElement.textContent = '30';
        this.timerCircleFill.style.strokeDashoffset = '0';
        this.timerElement.classList.remove('timer-warning', 'timer-critical');
        
        // Reset progress bar
        this.progressBar.style.width = '0%';
    }
}