import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import { initializeTimes, updateTimes } from '../components/Main';
import React from 'react';

test('Renders the Choose time label', () => {
    render(<BookingForm availableTimes={{date:'', times:[]}}/>);
    const labelElement = screen.getByText("Choose time");
    expect(labelElement).toBeInTheDocument();
});

describe('initializeTimes', () => {
  it('returns an object with a date and a times array', () => {
    const result = initializeTimes();
    expect(result).toHaveProperty('date');
    expect(result).toHaveProperty('times');
    expect(Array.isArray(result.times)).toBe(true);
    expect(result.times.length).toBeGreaterThan(0);
  });
});

describe('updateTimes', () => {
  it('returns a new object with the date updated', () => {
    const state = { date: '', times: [] };
    const action = { type: 'SET_DATE', payload: '2023-04-01' };
    const result = updateTimes(state, action);
    expect(result.date).toBe('2023-04-01');
  });

  it('returns a new object with the times array updated when a new date is selected', () => {
    const state = { date: '', times: ['00:00', '18:00'] };
    const action = { type: 'SET_DATE', payload: '2023-04-02' };
    const result = updateTimes(state, action);
    expect(result.times).not.toEqual(['00:00', '18:00']);
  });

  it('throws an error if the action type is not recognized', () => {
    const state = { date: '', times: [] };
    const action = { type: 'INVALID_TYPE', payload: 'test' };
    expect(() => updateTimes(state, action)).toThrow('Something went wrong');
  });
});

describe('BookingForm', () => {
  test('submits the form with correct data', () => {
    const dispatchMock = jest.fn();
    const submitForm = jest.fn();
    const availableTimes = {
      date: '',
      times: ['17:00', '18:00', '19:00']
    };

    render(<BookingForm dispatch={dispatchMock} availableTimes={availableTimes} submitForm={submitForm} />);
    const dateInput = screen.getByLabelText('Choose date');
    const timeInput = screen.getByLabelText('Choose time');
    const guestsInput = screen.getByLabelText('Number of guests');
    const occasionInput = screen.getByLabelText('Occasion');
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

    fireEvent.change(dateInput, { target: { value: '2023-04-01' } });
    fireEvent.change(timeInput, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });
    fireEvent.click(submitButton);

    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'SET_DATE',
      payload: '2023-04-01'
    });

    expect(submitForm).toHaveBeenCalledWith({
      date: '2023-04-01',
      time: '17:00',
      guests: '4',
      occasion: 'Anniversary'
    });
  });

  test("prevents the submission of invalid date and time", () => {
    const dispatchMock = jest.fn();
    const submitForm = jest.fn();
    const availableTimes = {
      date: '',
      times: ['17:00', '18:00', '19:00']
    };

      render(<BookingForm dispatch={dispatchMock} availableTimes={availableTimes} submitForm={submitForm} />);
      const dateInput = screen.getByLabelText('Choose date');
      const timeInput = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionInput = screen.getByLabelText('Occasion');
      const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

      fireEvent.change(dateInput, { target: { value: '2020-04-01' } });
      fireEvent.change(timeInput, { target: { value: '00:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });

      expect(submitButton).toBeDisabled();

  });

  test("prevents the submission of invalid guest number", () => {
    const dispatchMock = jest.fn();
    const submitForm = jest.fn();
    const availableTimes = {
      date: '',
      times: ['17:00', '18:00', '19:00']
    };

      render(<BookingForm dispatch={dispatchMock} availableTimes={availableTimes} submitForm={submitForm} />);
      const dateInput = screen.getByLabelText('Choose date');
      const timeInput = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionInput = screen.getByLabelText('Occasion');
      const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

      fireEvent.change(dateInput, { target: { value: '2024-04-01' } });
      fireEvent.change(timeInput, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '14' } });
      fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });

      expect(submitButton).toBeDisabled();

  });

  test("prevents the submission of invalid occasion", () => {
    const dispatchMock = jest.fn();
    const submitForm = jest.fn();
    const availableTimes = {
      date: '',
      times: ['17:00', '18:00', '19:00']
    };

      render(<BookingForm dispatch={dispatchMock} availableTimes={availableTimes} submitForm={submitForm} />);
      const dateInput = screen.getByLabelText('Choose date');
      const timeInput = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionInput = screen.getByLabelText('Occasion');
      const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

      fireEvent.change(dateInput, { target: { value: '2024-04-01' } });
      fireEvent.change(timeInput, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionInput, { target: { value: 'Party' } });

      expect(submitButton).toBeDisabled();

  });

  test("allows the submission of valid data", () => {
    const dispatchMock = jest.fn();
    const submitForm = jest.fn();
    const availableTimes = {
      date: '',
      times: ['17:00', '18:00', '19:00']
    };

      render(<BookingForm dispatch={dispatchMock} availableTimes={availableTimes} submitForm={submitForm} />);
      const dateInput = screen.getByLabelText('Choose date');
      const timeInput = screen.getByLabelText('Choose time');
      const guestsInput = screen.getByLabelText('Number of guests');
      const occasionInput = screen.getByLabelText('Occasion');
      const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });

      fireEvent.change(dateInput, { target: { value: '2044-04-01' } });
      fireEvent.change(timeInput, { target: { value: '17:00' } });
      fireEvent.change(guestsInput, { target: { value: '4' } });
      fireEvent.change(occasionInput, { target: { value: 'Birthday' } });

      expect(submitButton).toBeEnabled();

  });
});
