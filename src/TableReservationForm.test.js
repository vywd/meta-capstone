import { render, screen } from "@testing-library/react";
import TableReservationForm from './TableReservationForm';

test('Renders the TableReservationForm heading', () => {
    render(<TableReservationForm />);
    const btnElement = screen.getByText("Book Now");
    const headingElement = screen.getByText("Booking Form");
    expect(headingElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
})