import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Button from '../Button';
import Link from 'next/link';

export default function Footer({ styles }) {
  return (
    <footer className='bg-[#222222] h-24 font-serif font-semibold text-[#E9E3E6]'>
      <div className='container mx-auto px-4 h-full flex flex-col justify-end'>
        <ul className='flex flex-col justify-center text-center items-center mb-2'>
          <li className='p-2'>
            <div className='flex'>
              <Link
                target='_blank'
                href='https://github.com/dvbenson'
                rel='noopener noreferrer'
              >
                <Button label={<FontAwesomeIcon icon={faGithubAlt} className={styles.icon} />} variant={'secondary'}/>
              </Link>

              <Link
                target='_blank'
                href='https://www.linkedin.com/in/dvbenson/'
                rel='noopener noreferrer'
              >
                <Button label={<FontAwesomeIcon
                    icon={faLinkedinIn}
                    className={styles.icon}
                  />} variant={'secondary'}/>
              </Link>
            </div>
          </li>
          <li>
            <p className='text-center text-sm'>danielvb@danielvb.dev</p>
          </li>
          <li className=''>
            <p className='text-center text-xs'>© 2023 All Rights Reserved</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
