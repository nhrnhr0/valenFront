<script>
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "sveltestrap";

let isOpen = false;

function handleUpdate(event) {
  isOpen = event.detail.isOpen;
}
</script>

<Navbar light expand="md">
  <NavbarBrand href="/">Logo</NavbarBrand>
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="ms-auto" navbar>
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Blog</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Contact Us</NavLink>
      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
