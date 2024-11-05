import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './button.module.scss'

const Button = ({ onClick, outline, children, href }) => {
  return (
    <button
      onClick={onClick}
      className={styles.Button}>
        <Link href={href}>
                {children}
            </Link>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;