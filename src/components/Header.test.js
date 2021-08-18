import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

test("header-rendering", async () => {
    const { getByRole } = render(<Header />,  { wrapper: MemoryRouter })
    const headerText = getByRole('heading', {  name: /countries challenge/i})
    expect(headerText).toBeInTheDocument()
})