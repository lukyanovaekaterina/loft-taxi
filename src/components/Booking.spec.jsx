import React from "react"
import {Booking} from './Booking'
import { render } from '@testing-library/react'
 
describe("Booking", () => {
  it("renders correctly", () => {
    const {container} = render(<Booking/>)
    expect(container.innerHTML).toMatch("Booking")
  })
})