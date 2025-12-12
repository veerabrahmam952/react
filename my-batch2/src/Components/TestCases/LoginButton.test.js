import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {LoginButton, LoginWithProps} from './LoginButton.js';

describe('LoginButton Component', () => {
    test('rendes Login button initially', () => {
      //Given
      render(<LoginButton />);
      const button = screen.getByText('Log In');
      
      //Then
      expect(button).toBeInTheDocument();
    });

     test('renders Log Out button after click', () => {
       //Given
       render(<LoginButton />);
       const logInButton = screen.getByText('Log In');
    //    const logInButton = screen.getByRole('button', {name: /Log In/i});

       //When
       fireEvent.click(logInButton);

       //Then
       expect(screen.getByText('Log Out')).toBeInTheDocument();
    });

    test('toggles button text on each click', () => {
       //Given
       render(<LoginButton />);

       const logInButton = screen.getByText('Log In');

       fireEvent.click(logInButton);

       fireEvent.click(logInButton);

       expect(screen.getByText('Log In')).toBeInTheDocument();
    });
})

describe('LoginWithProps Component', () => {
    test('renders Log In button when isLoggedIn is false', ()=> {
        //Given
        render(<LoginWithProps isLoggedIn={false} />);

        const button = screen.getByText('Log In');
        expect(button).toBeInTheDocument();

    });

    test('renders Log Out button when isLoggedIn is true', ()=> {
        //Given
        render(<LoginWithProps isLoggedIn={true} />);

        const button = screen.getByText('Log Out');
        expect(button).toBeInTheDocument();

    });
});