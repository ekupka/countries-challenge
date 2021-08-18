import {render, fireEvent } from '@testing-library/react'
import App from '../components/App'

test("Search input changing", async () => {
    const { getByRole } = render(<App />)
    const searchInput = getByRole('searchbox', {  name: /search/i})
    fireEvent.change(searchInput, { target: {value: "Teste"}})
    expect(searchInput.value).toBe("Teste")
})