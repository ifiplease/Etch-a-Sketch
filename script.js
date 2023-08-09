const container = document.querySelector('.container');
const buttonsContainer = document.querySelector('.buttons')
let gridSize = 16;
let chosenColor = '#000000';

function updateGridSize (size){
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i=0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        container.appendChild(gridCell);
        gridCell.classList.add('cell');
        
        
        container.addEventListener('mousedown', (event) => {
            const gridCell = event.target;
            if(gridCell.classList.contains('cell')){
                gridCell.style.backgroundColor = chosenColor;
            }
        });

        container.addEventListener('mouseover', (event) => {
            if (event.buttons === 1) {
                const gridCell = event.target;
                if (gridCell.classList.contains('cell')){
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
                        gridCell.style.backgroundColor = `#${randomColor}`;
                    } else {
                        gridCell.style.backgroundColor = chosenColor;
                    }
                }        
            }
        });
    }
}

function changeGridSize (size) {
    gridSize = size;
    updateGridSize(gridSize);
}

const buttonConfigs = [
    {name: 'Color Selection', action: 'colorSelection'},
    { name: 'Rainbow', action: 'rainbow' },
    { name: 'Eraser', action: 'eraser' },
    { name: 'Clear', action: 'clear' } 
];

buttonConfigs.forEach(buttonConfig => {
    const button = document.createElement('button');
    button.textContent = buttonConfig.name;
    buttonsContainer.appendChild(button);
    button.addEventListener('click', () => {
        handleButtonClick(buttonConfig.action);
    });
});

function clearGrid() {
    const gridCells = document.querySelectorAll('.cell')
    gridCells.forEach(gridCell => {
        gridCell.style.backgroundColor = '';
    })
}

function handleButtonClick (action) {
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
        case 'eraser':
            chosenColor = 'white';
        break;
        case 'clear':
            clearGrid();
        break;
    }
}

updateGridSize(gridSize);
