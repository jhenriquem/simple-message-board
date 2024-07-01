export default function UserName() {
  if (!localStorage.getItem("UserName")) {
    const Name: string | null = prompt("Type your name :")

    Name && localStorage.setItem("UserName", Name)

  }
}
