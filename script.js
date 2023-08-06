const container = document.querySelector('.container');

const numberOfDuplicates = 256;
for (let i=0; i < numberOfDuplicates; i++) {
    const grids = document.createElement('div');
    container.appendChild(grids);
    grids.classList.add('grids'); 
    
    grids.addEventListener('mousedown', () => {
        grids.style.backgroundColor = 'black';
    });

    grids.addEventListener('mouseover', (event) => {
        if (event.buttons === 1) {
          grids.style.backgroundColor = 'black';
        }
    });

    
}