class QuizEngine {
    constructor(uiController) {
        this.uiController = uiController;
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.skippedQuestions = 0;
        this.timer = null;
        this.timeLeft = 30;
        this.subject = '';
        this.userAnswers = [];
    }
    
    setQuestions(questions) {
        this.questions = questions;
    }
    
    setSubject(subject) {
        this.subject = subject;
        this.uiController.setSubject(subject);
    }
    
    startQuiz() {
        this.resetQuizStats();
        this.loadQuestion();
        this.startTimer();
    }
    
    resetQuiz() {
        this.resetQuizStats();
        this.uiController.resetQuizUI();
    }
    
    resetQuizStats() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.skippedQuestions = 0;
        this.timeLeft = 30;
        this.userAnswers = [];
        clearInterval(this.timer);
    }
    
    loadQuestion() {
        if (this.currentQuestionIndex >= this.questions[this.subject].length) {
            this.endQuiz();
            return;
        }
        
        const question = this.questions[this.subject][this.currentQuestionIndex];
        this.uiController.displayQuestion(
            question.question, 
            question.options, 
            this.currentQuestionIndex + 1, 
            this.questions[this.subject].length
        );
        
        // Reset timer for new question
        this.resetTimer();
        
        // Set up option selection
        this.setupOptionSelection(question.answer);
    }
    
    setupOptionSelection(correctAnswer) {
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                // Prevent multiple selections
                if (option.classList.contains('selected')) return;
                
                // Mark all options as unselectable
                options.forEach(opt => opt.style.pointerEvents = 'none');
                
                // Get selected answer
                const selectedAnswer = option.textContent;
                
                // Check if answer is correct
                if (selectedAnswer === correctAnswer) {
                    option.classList.add('correct');
                    this.correctAnswers++;
                    this.uiController.showFeedback(true);
                } else {
                    option.classList.add('wrong');
                    this.wrongAnswers++;
                    this.uiController.showFeedback(false);
                    
                    // Highlight correct answer
                    options.forEach(opt => {
                        if (opt.textContent === correctAnswer) {
                            opt.classList.add('correct');
                        }
                    });
                }
                
                // Store user answer
                this.userAnswers.push({
                    questionIndex: this.currentQuestionIndex,
                    selectedAnswer: selectedAnswer,
                    isCorrect: selectedAnswer === correctAnswer,
                    correctAnswer: correctAnswer
                });
                
                // Update score
                this.updateScore();
                
                // Move to next question after delay
                clearInterval(this.timer);
                setTimeout(() => {
                    this.nextQuestion();
                }, 1500);
            });
        });
    }
    
    nextQuestion() {
        this.currentQuestionIndex++;
        this.loadQuestion();
        this.uiController.updateProgress(
            this.currentQuestionIndex, 
            this.questions[this.subject].length
        );
    }
    
    skipQuestion() {
        this.skippedQuestions++;
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: null,
            isCorrect: false,
            skipped: true
        });
        this.nextQuestion();
    }
    
    updateScore() {
        this.score = Math.round(
            (this.correctAnswers / (this.currentQuestionIndex + 1)) * 100
        );
        this.uiController.updateScore(this.score);
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.uiController.updateTimer(this.timeLeft);
            
            // Visual feedback when time is running out
            if (this.timeLeft <= 10) {
                this.uiController.timerWarning(this.timeLeft <= 5);
            }
            
            if (this.timeLeft <= 0) {
                clearInterval(this.timer);
                this.timeUp();
            }
        }, 1000);
    }
    
    resetTimer() {
        clearInterval(this.timer);
        this.timeLeft = 30;
        this.uiController.updateTimer(this.timeLeft);
        this.startTimer();
    }
    
    timeUp() {
        this.wrongAnswers++;
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            selectedAnswer: null,
            isCorrect: false,
            timeUp: true
        });
        this.updateScore();
        this.uiController.showTimeUpFeedback();
        setTimeout(() => {
            this.nextQuestion();
        }, 1500);
    }
    
    endQuiz() {
        clearInterval(this.timer);
        this.uiController.showResults(
            this.score, 
            this.correctAnswers, 
            this.wrongAnswers, 
            this.skippedQuestions
        );
    }

}