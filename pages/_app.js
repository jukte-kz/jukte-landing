import '../styles/globals.scss';
import '../styles/welcome.style.scss';
import '../styles/header.style.scss';
import '../styles/login.style.scss';
import '../styles/registration.style.scss';
import '../styles/home.style.scss';
import '../styles/settings.style.scss';
import '../styles/linkBlock.styles.scss';
import '../styles/datePicker.styles.scss';
import '../styles/createOrder.style.scss';
import '../styles/myCard.styles.scss';
import '../styles/myOrders.styles.scss';
import "react-datepicker/dist/react-datepicker.css";
import '../utils/i18next';
import { Suspense } from "react";

function MyApp({ Component, pageProps }) {
  return (
      <Suspense fallback="loading">
        <Component {...pageProps} />
      </Suspense>
  )
}

export default MyApp
