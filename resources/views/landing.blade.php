<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Master Languages Beautifully - Language Platform</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="dark-theme">
    
    <!-- Background Elements -->
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>
    <div class="bg-particles" id="particles-container"></div>

    <nav class="navbar glass-panel">
        <div class="nav-container">
            <div class="logo">
                <span class="logo-icon"></span>
                <span class="logo-text">LinguaNova</span>
            </div>
            <div class="nav-links">
                <a href="#features">Features</a>
                <a href="#languages">Languages</a>
                <a href="#pricing">Pricing</a>
                <a href="#community">Community</a>
            </div>
            <div class="nav-actions">
                <a href="/login" class="btn btn-ghost">Login</a>
                <a href="#" class="btn btn-primary magnetic-btn">Get Started</a>
            </div>
        </div>
    </nav>

    <main>
        <section class="hero">
            <div class="hero-content fade-in-up">
                <h1 class="hero-title">Master Languages <span class="text-gradient">Beautifully</span></h1>
                <p class="hero-subtitle">Learn Japanese, Korean, and Chinese through immersive lessons, AI conversations, flashcards, kanji practice, and real-world speaking.</p>
                <div class="hero-cta">
                    <a href="#" class="btn btn-primary btn-large magnetic-btn">Start Learning</a>
                    <a href="#" class="btn btn-secondary btn-large glass-panel hover-glow">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                        Watch Demo
                    </a>
                </div>
                
                <div class="statistics fade-in-up delay-2">
                    <div class="stat-item">
                        <span class="stat-number">500K+</span>
                        <span class="stat-label">Learners</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">25M</span>
                        <span class="stat-label">Lessons completed</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">4.9</span>
                        <span class="stat-label">Rating</span>
                    </div>
                </div>
            </div>

            <div class="hero-visual parallax-container">
                <div class="floating-objects" id="hero-floating-objects">
                    <!-- Characters and shapes injected via JS for cleaner HTML and easier manipulation -->
                </div>
            </div>
        </section>

        <section id="features" class="features section-padding">
            <div class="section-header fade-in-up">
                <h2 class="section-title">Everything you need to become fluent</h2>
            </div>
            <div class="features-grid">
                
                <div class="feature-card glass-panel interactive-card fade-in-up delay-1">
                    <div class="feature-icon icon-ai">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12 2.1 22"></path><path d="m22 2.1-9.9 9.9"></path></svg>
                    </div>
                    <h3 class="feature-title">Basic Language</h3>
                    <p class="feature-desc">Practice real conversations with an intelligent tutor that adapts to your level.</p>
                </div>

                <div class="feature-card glass-panel interactive-card fade-in-up delay-2">
                    <div class="feature-icon icon-vocab">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                    </div>
                    <h3 class="feature-title">Vocabulary Builder</h3>
                    <p class="feature-desc">Smart SRS flashcards ensure you never forget the words you've learned.</p>
                </div>

                <div class="feature-card glass-panel interactive-card fade-in-up delay-3">
                    <div class="feature-icon icon-grammar">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <h3 class="feature-title">Grammar Lessons</h3>
                    <p class="feature-desc">Bite-sized, intuitive explanations of complex grammar rules.</p>
                </div>

                <div class="feature-card glass-panel interactive-card fade-in-up delay-4">
                    <div class="feature-icon icon-speaking">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1"></path><line x1="12" y1="18" x2="12" y2="22"></line></svg>
                    </div>
                    <h3 class="feature-title">Speaking Practice</h3>
                    <p class="feature-desc">Advanced speech recognition helps perfect your pronunciation and accent.</p>
                </div>

                <div class="feature-card glass-panel interactive-card fade-in-up delay-5">
                    <div class="feature-icon icon-writing">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path><path d="M8 18h1"></path><path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z"></path></svg>
                    </div>
                    <h3 class="feature-title">Kanji/Hanzi Writing</h3>
                    <p class="feature-desc">Learn stroke order and practice writing characters interactively.</p>
                </div>

                <div class="feature-card glass-panel interactive-card fade-in-up delay-6">
                    <div class="feature-icon icon-challenge">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
                    </div>
                    <h3 class="feature-title">Daily Challenges</h3>
                    <p class="feature-desc">Stay motivated with daily streaks, leaderboards, and exclusive rewards.</p>
                </div>

            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2026 LinguaNova. Master Languages Beautifully.</p>
        </div>
    </footer>
</body>
</html>
