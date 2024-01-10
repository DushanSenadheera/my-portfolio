import './Footer.scss'

export default function Footer(){

    const year = new Date().getFullYear()

    return(
        <footer>
            <small>&copy; {year} Designed & Developed By Dushan Senadheera</small>
        </footer>
    )
}