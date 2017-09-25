describe('Function: calculate()', function () {

    beforeEach(function(){
        window.add = jasmine.createSpy().and.returnValue('add');
        window.subtract = jasmine.createSpy().and.returnValue('subtract');
    });

   it('should add the numbers and display the result', function () {
        document.body.innerHTML = __html__['served/calculator/calc.html'];

        document.getElementById('inputOne').value = 2;
        document.getElementById('inputTwo').value = 3;
        document.getElementById('action').value = 'add';
        calculate();
        expect(add).toHaveBeenCalled();
        expect(document.getElementById('answer').innerText).toBe('The result is: add');
    });

    it('should subtract the numbers and the calculated result', function () {
        document.body.innerHTML = __html__['served/calculator/calc.html'];
        document.getElementById('inputOne').value = 2;
        document.getElementById('inputTwo').value = 3;
        document.getElementById('action').value = 'subtract';
        calculate();
        expect(subtract).toHaveBeenCalled();
        expect(document.getElementById('answer').innerText).toBe('The result is: subtract');
    });

    it('should show warning', function () {
        document.body.innerHTML = __html__['served/calculator/calc.html'];
        document.getElementById('inputOne').value = 2;
        document.getElementById('inputTwo').value = 3;
        calculate();
        expect(document.getElementById('answer').innerText).toBe('Please select an action');
    });
});


