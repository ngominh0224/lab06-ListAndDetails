import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockCharacterData from './mockCharacterData.json';
import HeyArnoldContainer from './HeyArnoldContainer';

const server = setupServer(
  rest.get(
    `https://hey-arnold-api.herokuapp.com/api/v1/characters`,
    (req, res, ctx) => {
      return res(ctx.json(mockCharacterData));
    }
  )
);

describe('HeyArnold container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of characters on the page', async () => {
    render(
      <MemoryRouter>
        <HeyArnoldContainer />
      </MemoryRouter>
    );

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'characters' });
    expect(ul).toMatchSnapshot();
  });
});
