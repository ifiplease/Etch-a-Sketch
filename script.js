const container = document.querySelector('.container');
const gridSize = 16;
const buttonsContainer = document.querySelector('.buttons')
const selectedColor = 'chosenColor';

const numberOfDuplicates = gridSize * gridSize;
for (let i=0; i < numberOfDuplicates; i++) {
    const grids = document.createElement('div');
    container.appendChild(grids);
    grids.classList.add('grids'); 
    
    grids.addEventListener('mousedown', () => {
        grids.style.backgroundColor = chosenColor;
    });

    grids.addEventListener('mouseover', (event) => {
        if (event.buttons === 1) {
            if (chosenColor === 'rainbow') {
                const rainbowColors = [
                    ['FF0000', 'FF3300', 'FF6600', 'FF9900', 'FFCC00', 'FFFF00'], // Red
                    ['FF6600', 'FF8000', 'FF9900', 'FFB200', 'FFCC00', 'FFD900'], // Orange
                    ['FFCC00', 'FFD100', 'FFD900', 'FFE000', 'FFEA00', 'FFFF00'], // Yellow
                    ['00FF00', '33FF00', '66FF00', '99FF00', 'CCFF00', 'FFFF00'], // Green
                    ['0000FF', '0019FF', '0033FF', '004CFF', '0066FF', '007FFF'], // Blue
                    ['4B0082', '4C1982', '4D3282', '4E4C82', '4F6582', '507F82'], // Indigo
                    ['9400D3', '9500C0', '9600AD', '970097', '980084', '990071'] // Violet
                ];
                const colorGroup = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];
                const randomColor = colorGroup[Math.floor(Math.random() * colorGroup.length)]
                grids.style.backgroundColor = `#${randomColor}`;
            } else {
                grids.style.backgroundColor = chosenColor;
            }        
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

function handleButtonClick (action, params) {
    switch (action) {
        case 'colorSelection': 
            const colorPicker = document.createElement('input');
            colorPicker.type = 'color';
            colorPicker.addEventListener('input', (event) => {
                chosenColor = event.target.value;
            });
            colorPicker.click();
        break;
        case 'rainbow':
            chosenColor = 'rainbow';
        break;   
    }
}