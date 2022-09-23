import { render , screen  } from "@testing-library/react"
import { MuiAvatar } from "./Avatar"

it("Check for Avatar", async()=>{
    render(<MuiAvatar />);
    const avatar = screen.getByText(/S/i);
    expect(avatar).toBeInTheDocument();
})