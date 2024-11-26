class TechBackgroundEffects {
    constructor() {
        this.init();
    }

    init() {
        this.createMatrixEffect();
        this.setupEnhancedRippleEffect();
    }

    createMatrixEffect() {
        const container = document.createElement('div');
        container.className = 'matrix-effect';
        document.querySelector('.gradient-bg').appendChild(container);

        // Create matrix columns
        for (let i = 0; i < 50; i++) {
            const column = document.createElement('div');
            column.className = 'matrix-column';
            column.style.left = `${Math.random() * 100}%`;
            column.style.animation = `matrix-fall ${5 + Math.random() * 10}s linear infinite`;
            column.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(column);
        }
    }

    setupEnhancedRippleEffect() {
        const container = document.createElement('div');
        container.className = 'ripple-container';
        document.querySelector('.gradient-bg').appendChild(container);

        document.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.position = 'fixed';
            ripple.style.width = '2px';
            ripple.style.height = '2px';
            ripple.style.left = `${e.clientX}px`;
            ripple.style.top = `${e.clientY}px`;
            
            // Enhanced ripple animation
            ripple.animate([
                {
                    transform: 'scale(0)',
                    opacity: 0.5,
                },
                {
                    transform: 'scale(100)',
                    opacity: 0,
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            });
            
            container.appendChild(ripple);
            setTimeout(() => ripple.remove(), 1000);
        });
    }
}

// Update particles configuration for a more tech-oriented look
const particlesConfig = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00ff00"
        },
        shape: {
            type: ["circle", "triangle"],
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff00",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
};

// Update matrix effect
class MatrixEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.querySelector('.matrix-effect').appendChild(this.canvas);
        this.initialize();
    }

    initialize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        
        // Increase fontSize to slow down vertical movement
        this.fontSize = 14;
        this.columns = this.canvas.width / this.fontSize;
        this.drops = [];
        
        for(let i = 0; i < this.columns; i++) {
            this.drops[i] = 1;
        }

        this.matrix = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789";
        
        this.draw();
    }

    draw() {
        // Slow down the fade effect
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';  // Reduced from 0.05
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#00ff00';
        this.ctx.font = this.fontSize + 'px monospace';
        
        for(let i = 0; i < this.drops.length; i++) {
            const text = this.matrix[Math.floor(Math.random() * this.matrix.length)];
            this.ctx.fillText(text, i * this.fontSize, this.drops[i] * this.fontSize);
            
            // Make drops fall more slowly by increasing the random threshold
            if(this.drops[i] * this.fontSize > this.canvas.height && Math.random() > 0.990) {  // Increased from 0.975
                this.drops[i] = 0;
            }
            // Slow down the fall speed
            if(Math.random() > 0.1) {  // Add this condition to slow down drops
                this.drops[i] += 0.5;  // Reduced from 1
            }
        }
        
        // Slow down the animation frame rate
        setTimeout(() => {
            requestAnimationFrame(() => this.draw());
        }, 50);  // Add delay between frames (in milliseconds)
    }
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', particlesConfig);
    new MatrixEffect();
});