import React from 'react';
import styles from './Header.module.scss';

const Header = ({ isDark, setIsDark }) => {
  return (
    <header className={`${styles.header} ${isDark ? styles.headerDark : ''}`}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerH1}>Where in the world?</h1>
        <div
          className={styles.modeDiv}
          onClick={() => {
            document.body.classList.toggle('body-dark-mode');
            setIsDark((prev) => !prev);
          }}
        >
          {isDark ? (
            <svg
              width='16'
              height='15'
              viewBox='0 0 16 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.5532 10.815C7.66857 10.815 4.51929 7.92783 4.51929 4.36821C4.51929 3.0253 4.96679 1.78158 5.73143 0.75C2.69036 1.69515 0.5 4.33122 0.5 7.43807C0.5 11.3385 3.94929 14.5 8.20357 14.5C11.5929 14.5 14.4696 12.4932 15.5 9.70452C14.375 10.4048 13.0161 10.815 11.5532 10.815Z'
                fill='white'
              />
            </svg>
          ) : (
            <svg
              width='18'
              height='17'
              viewBox='0 0 18 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.5532 11.815C8.66857 11.815 5.51929 8.92783 5.51929 5.36821C5.51929 4.0253 5.96679 2.78158 6.73143 1.75C3.69036 2.69515 1.5 5.33122 1.5 8.43807C1.5 12.3385 4.94929 15.5 9.20357 15.5C12.5929 15.5 15.4696 13.4932 16.5 10.7045C15.375 11.4048 14.0161 11.815 12.5532 11.815Z'
                fill='white'
                stroke='#111517'
                strokeWidth='1.25'
              />
            </svg>
          )}
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
