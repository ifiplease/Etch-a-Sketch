const container = document.querySelector('.container');

const numberOfDuplicates = 256;
for (let i=0; i < numberOfDuplicates; i++) {
    const grids = document.createElement('div');
    container.appendChild(grids);
    grids.classList.add('grids');
    
}
