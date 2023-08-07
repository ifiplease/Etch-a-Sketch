const container = document.querySelector('.container');
const gridSize = 16;
const buttonsContainer = document.querySelector('.buttons')

const numberOfDuplicates = gridSize * gridSize;
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

const buttonConfigs = [
    {name: 'Color Selection', action: 'colorSelection'},
    { name: 'Rainbow', action: 'rainbow' },
    { name: 'Size: 16', action: 'gridSize', params: [16] },
    { name: 'Size: 32', action: 'gridSize', params: [32] },
    { name: 'Size: 64', action: 'gridSize', params: [64] },
    { name: 'Size: 100', action: 'gridSize', params: [100] },
    { name: 'Eraser', action: 'eraser' },
    { name: 'Clear', action: 'clear' } 
];

buttonConfigs.forEach(buttonConfig => {
    const button = document.createElement('button');
    button.textContent = buttonConfig.name;
    buttonsContainer.appendChild(button);
    button.addEventListener('click', () => {
        handleButtonClick(buttonConfig.action, buttonConfig.params);
    });
});