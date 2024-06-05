import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe } from "vitest";
import App from './App.jsx';

describe('App component', () => {
    it('should increment count when user clicks button omg', async () => {

        //given
        render(<App />)

        //then

        screen.debug(); //wyrenderuje w konsoli html zey mozna zdebuowac to

        //expect(screen.getByRole('img')).toBeInTheDocument(); //ten test nie przechodzi bo znajduje więcej niż jeden obraz

        //expect(screen.getByRole('img', { name: "Vite logo" })).toBeInTheDocument(); //zadziała bo znajdzie tylko jeden pbraz


        //when
        await userEvent.click(screen.getByRole('button', {name: 'count is 0'}));

        //then
        //expect(screen.getByRole('button', { name: 'count is 1'})).toBeInTheDocument
        expect(screen.getByRole('button')).toHaveTextContent('count is 1');
    })

    it('should be', async () => {
        //given
        render(<App />)

        expect(screen.getByRole('code')).toBeInTheDocument();
    })

})