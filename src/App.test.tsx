import React from 'react';
import { findByRole, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders the list of tasks', async () => {
  render(<App />);

  const tasks = await screen.findAllByRole('listitem')
  expect(tasks).toHaveLength(4)
});


test('it adds a task', async () => {
  render(<App />);

  const input = await screen.findByRole('textbox')
  fireEvent.click(input)
  fireEvent.change(input, {target: {value: 'a new task'}})
  const form = await screen.findByRole('form')
  fireEvent.submit(form)

  const tasks = await screen.findAllByRole('listitem')
  expect(tasks).toHaveLength(5)
});

test('filters the task list', async () => {
  render(<App />);

  const completedLink = await screen.findByText(/view completed/i)
  fireEvent.click(completedLink)

  const tasks = await screen.findAllByRole('listitem')
  expect(tasks).toHaveLength(1)
});

test('mark a task as completed', async () => {
  render(<App />);

  const notCompletedTasksLink = await screen.findByText(/view not completed/i)
  fireEvent.click(notCompletedTasksLink)
  const checkboxes = await screen.findAllByRole('checkbox', {checked: false})
  const checkbox = checkboxes[0]
  
  fireEvent.click(checkbox)
  const completedTasksLink = await screen.findByText(/view completed/i)
  fireEvent.click(completedTasksLink)

  const tasks = await screen.findAllByRole('listitem')

  expect(tasks).toHaveLength(2)
});
