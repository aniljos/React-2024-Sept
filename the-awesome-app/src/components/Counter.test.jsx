import {fireEvent, render, screen} from '@testing-library/react';
import Counter from './Counter';


describe("Counter tests", () => {


    it("render Counter", () => {

        render(<Counter initialvalue={5}/>);
        const text = screen.getByText("Counter: 5");
        expect(text).toBeInTheDocument();

    })
    it("Counter increments", () => {

        render(<Counter initialvalue={5}/>);
        const text = screen.getByText("Counter: 5");
        expect(text).toBeInTheDocument();

        const btnInc = screen.getByText("Inc");
        fireEvent.click(btnInc, {});

        const updatedText = screen.getByText("Counter: 6");
        expect(updatedText).toBeInTheDocument();

    })

    it("update Counter", () => {

        render(<Counter initialvalue={5}/>);
        const text = screen.getByText("Counter: 5");
        expect(text).toBeInTheDocument();

        const inputEle = screen.getByPlaceholderText("Enter the counter");
        fireEvent.change(inputEle, {target: {value: "100"}});

        const updatedText = screen.getByText("Counter: 100");
        expect(updatedText).toBeInTheDocument();
    })

})