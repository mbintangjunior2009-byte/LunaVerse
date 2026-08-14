<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - LinguaNova</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="dark-theme login-body">
    
    <!-- Background Elements -->
    <div class="bg-glow bg-glow-1"></div>
    <div class="bg-glow bg-glow-2"></div>
    <div class="bg-particles" id="particles-container"></div>

    <div class="login-layout">
        <!-- Left Side: Hero Illustration -->
        <div class="login-left parallax-container">
            <div class="logo logo-absolute">
                <a href="/" class="logo-link">
                    <span class="logo-icon"></span>
                    <span class="logo-text">LinguaNova</span>
                </a>
            </div>
            <div class="login-illustration">
                <div class="floating-objects" id="login-floating-objects">
                    <!-- Characters and shapes injected via JS -->
                </div>
            </div>
        </div>

        <!-- Right Side: Login Form -->
        <div class="login-right">
            <div class="login-card glass-panel fade-in-up">
                <div class="login-header">
                    <h1 class="login-title">Welcome Back</h1>
                    <p class="login-subtitle">Continue your language journey.</p>
                </div>

                <form class="login-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" class="glass-input" placeholder="name@example.com" required>
                    </div>
                    
                    <div class="form-group">
                        <div class="form-group-header">
                            <label for="password">Password</label>
                            <a href="#" class="forgot-password">Forgot Password?</a>
                        </div>
                        <input type="password" id="password" class="glass-input" placeholder="••••••••" required>
                    </div>

                    <div class="form-group checkbox-group">
                        <label class="custom-checkbox">
                            <input type="checkbox" id="remember">
                            <span class="checkmark"></span>
                            Remember me
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block magnetic-btn">Continue</button>
                </form>

                <div class="login-divider">
                    <span>or</span>
                </div>

                <div class="social-logins">
                    <button class="btn btn-social glass-panel hover-glow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Google
                    </button>
                    <button class="btn btn-social glass-panel hover-glow">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path><path d="M10 2c1 .5 2 2 2 5h-2c0-3-1-4-2-5Z"></path></svg>
                        Apple
                    </button>
                </div>

                <p class="login-footer">
                    Don't have an account? <a href="#">Create account</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
