import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import DetailsContainer from './DetailsContainer';
import mockData from './mockData.json';
import { MemoryRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

const server = setupServer(
  rest.get(
    'https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51',
    (req, res, ctx) => {
      return res(ctx.json(mockData));
    }
  )
);

describe('DetailsContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('gives one character', async () => {
    render(
      <MemoryRouter initialEntries={['/characters/5da237699734fdcb7bef8f51']}>
        <Route path="/characters/:id">
          <DetailsContainer />
        </Route>
      </MemoryRouter>
    );

    const unorderedList = await screen.findByRole('list', {
      name: 'characters',
    });
    expect(unorderedList).toMatchSnapshot();
  });
});
