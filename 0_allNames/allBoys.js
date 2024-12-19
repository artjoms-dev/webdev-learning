// JavaScript for handling dropdown interactivity and filters

// Example: Length filter
const lengthDisplay = document.getElementById('length-display');
const minInput = document.getElementById('min-length');
const maxInput = document.getElementById('max-length');

minInput.addEventListener('input', () => {
    validateLengthInput(minInput);
    validateMinMaxValues();
    updateLengthDisplay();
    addLengthFilterTag();
});

maxInput.addEventListener('input', () => {
    validateLengthInput(maxInput);
    validateMinMaxValues();
    updateLengthDisplay();
    addLengthFilterTag();
});

function validateLengthInput(input) {
    if (input.value > 100) {
        input.value = 100;
    }
}

function validateMinMaxValues() {
    if (parseInt(minInput.value) > parseInt(maxInput.value)) {
        maxInput.value = minInput.value;
    }
}

function updateLengthDisplay() {
    lengthDisplay.textContent = `${minInput.value} - ${maxInput.value}`;
}

function addLengthFilterTag() {
    const value = `${minInput.value} - ${maxInput.value}`;
    const type = 'Length';

    // Check if the filter already exists
    const existingTag = Array.from(selectedFiltersDiv.children).find(
        tag => tag.dataset.filterType === type
    );
    if (existingTag) {
        existingTag.dataset.filterValue = value;
        existingTag.innerHTML = `${value} <button class="remove-filter">x</button>`;
        existingTag.querySelector('.remove-filter').addEventListener('click', () => {
            existingTag.remove();
        });
        return;
    }

    // Create new filter tag
    const filterTag = document.createElement('span');
    filterTag.classList.add('filter-tag');
    filterTag.dataset.filterType = type;
    filterTag.dataset.filterValue = value;
    filterTag.innerHTML = `${value} <button class="remove-filter">x</button>`;

    // Add remove functionality
    filterTag.querySelector('.remove-filter').addEventListener('click', () => {
        filterTag.remove();
    });

    selectedFiltersDiv.appendChild(filterTag);
}

// Example: Starts With filter
const startsWithDisplay = document.getElementById('starts-with-display');
const startsWithButtons = document.querySelectorAll('#starts-with-dropdown .dropdown-content button');

startsWithButtons.forEach(button => {
    button.addEventListener('click', () => {
        addFilterTag('Starts With', button.textContent);
    });
});

// Example: Meaning filter
const meaningDisplay = document.getElementById('meaning-display');
const meaningButtons = document.querySelectorAll('#meaning-dropdown .dropdown-content button');

meaningButtons.forEach(button => {
    button.addEventListener('click', () => {
        addFilterTag('Meaning', button.textContent);
    });
});

// Origin filter
const originSelect = document.getElementById('origin');
originSelect.addEventListener('change', () => {
    if (originSelect.value) {
        addFilterTag('Origin', originSelect.options[originSelect.selectedIndex].text);
    }
});

// Add selected filter to the "selected filters" div
const selectedFiltersDiv = document.querySelector('.selected-filters');

function addFilterTag(type, value) {
    // Check if the filter already exists
    const existingTag = Array.from(selectedFiltersDiv.children).find(
        tag => tag.dataset.filterType === type && tag.dataset.filterValue === value
    );
    if (existingTag) return;

    // Create new filter tag
    const filterTag = document.createElement('span');
    filterTag.classList.add('filter-tag');
    filterTag.dataset.filterType = type;
    filterTag.dataset.filterValue = value;
    filterTag.innerHTML = `${value} <button class="remove-filter">x</button>`;

    // Add remove functionality
    filterTag.querySelector('.remove-filter').addEventListener('click', () => {
        filterTag.remove();
    });

    selectedFiltersDiv.appendChild(filterTag);
}

// Apply filters
const applyFiltersButton = document.getElementById('apply-filters');
applyFiltersButton.addEventListener('click', () => {
    const selectedFilters = Array.from(selectedFiltersDiv.children).map(tag => ({
        type: tag.dataset.filterType,
        value: tag.dataset.filterValue
    }));

    console.log('Applied Filters:', selectedFilters);
    // Here you would send the selectedFilters to the server or use them to filter the names dynamically.
});
