document.addEventListener('DOMContentLoaded', (event) => {
    function myColour() {
        var colour = document.getElementById('colourPicker').value;
        document.body.style.backgroundColor = colour;
        document.getElementById('box').value = colour;
    }

    document.getElementById('colourPicker').addEventListener('input', myColour);
});
