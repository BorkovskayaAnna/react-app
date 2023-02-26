import { Link } from 'react-router-dom'
import classnames from 'classnames'

import style from './ErrorPage.module.scss'
import errorImage from '../../assets/images/error.jpg'

export const ErrorPage = () => (
  <div className={classnames("container", style.ErrorPageWrap)}>
    <div className={style.ErrorImageWrap}>
      <img
        src={errorImage}
        alt="page not found"
      />
    </div>
    <div className={style.ErrorPageNav}>
      <Link to='/' target='_self'>
        <span className={style.linkText}>Go to Home Page</span>
        <span className={style.linkTextHover}>Go to Home Page</span>
      </Link>
    </div>
  </div>
)

