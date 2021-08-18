import { render } from '@testing-library/react'
import CountryCard from './CountryCard'
import { MemoryRouter } from 'react-router-dom'

test("card-rendering", async () => {
    const { getByRole } = render(<CountryCard country={{
        _id: "661",
        name: "Brazil",
        capital: "Brasília",
        flag: { svgFile: "https://restcountries.eu/data/bra.svg" }
    }} />,  { wrapper: MemoryRouter })

    const countryName = getByRole('heading', {  name: "Brazil"})
    const capitalName = getByRole('heading', {  name: /capital: brasília/i})
    const flagImage = getByRole('img', {  name: /brazil flag\./i})

    expect(countryName).toBeInTheDocument()
    expect(capitalName).toBeInTheDocument()
    expect(flagImage).toBeInTheDocument()
})

