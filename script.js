
    
    // Function to make petals fall
    function makePetalFall(petal) {
        petal.style.animation = 'none';
        petal.offsetHeight;
        petal.style.animation = 'petalFall 2s ease-in forwards';
    }
    
    // Add click effect to restart animation and make petals fall
   
        
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
        
     
    
    // Create snowflakes periodically
    setInterval(createSnowflake, 200);

}); 

