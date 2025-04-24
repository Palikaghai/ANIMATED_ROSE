document.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('.flower');
    const petals = document.querySelectorAll('.petal');
    
    // Set rotation variables for petals
    petals.forEach((petal, index) => {
        const rotation = index * (360 / petals.length);
        petal.style.setProperty('--rotation', `${rotation}deg`);
    });
    
    // Add hover effect with gentle swaying
    flower.addEventListener('mouseover', () => {
        flower.style.transform = 'scale(1.1)';
        flower.style.animation = 'flowerSway 2s ease-in-out infinite';
    });
    
    flower.addEventListener('mouseout', () => {
        flower.style.transform = 'scale(1)';
        flower.style.animation = 'none';
    });
    
    // Function to make petals fall
    function makePetalFall(petal) {
        petal.style.animation = 'none';
        petal.offsetHeight;
        petal.style.animation = 'petalFall 2s ease-in forwards';
    }
    
    // Add click effect to restart animation and make petals fall
    flower.addEventListener('click', () => {
        // Reset flower animation
        flower.style.animation = 'none';
        flower.offsetHeight;
        flower.style.animation = 'flowerGrow 3s ease-in-out forwards';
        
        // Make existing petals fall
        petals.forEach(petal => {
            if (petal.style.opacity !== '0') {
                makePetalFall(petal);
            }
        });
        
        // Reset petal animations with enhanced blooming
        setTimeout(() => {
            petals.forEach((petal, index) => {
                petal.style.animation = 'none';
                petal.offsetHeight;
                if (petal.classList.contains('core-petal')) {
                    petal.style.animation = 'corePetalBloom 2s ease-in-out forwards';
                } else if (petal.classList.contains('inner-petal')) {
                    petal.style.animation = 'innerPetalBloom 2s ease-in-out forwards';
                } else if (petal.classList.contains('middle-petal')) {
                    petal.style.animation = 'middlePetalBloom 2s ease-in-out forwards';
                } else {
                    petal.style.animation = 'outerPetalBloom 2s ease-in-out forwards';
                }
                petal.style.animationDelay = `${0.3 + index * 0.2}s`;
            });
        }, 2000);
        
        // Reset stem animation
        const stem = document.querySelector('.stem');
        stem.style.animation = 'none';
        stem.offsetHeight;
        stem.style.animation = 'stemGrow 2s ease-in-out forwards';
        
        // Reset leaf animations
        const leaves = document.querySelectorAll('.leaf');
        leaves.forEach((leaf, index) => {
            leaf.style.animation = 'none';
            leaf.offsetHeight;
            leaf.style.animation = 'leafGrow 1s ease-in-out forwards';
            leaf.style.animationDelay = `${2.2 + index * 0.2}s`;
        });
    });
    
    // Add snow effect
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.innerHTML = '❄';
        document.body.appendChild(snowflake);
        
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }
    
    // Create snowflakes periodically
    setInterval(createSnowflake, 200);
}); 