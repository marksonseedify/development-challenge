import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Card } from '../components/card';
import { getShortenedURLs, shorten as shortenAPI } from '../services/shortener';
import { toast } from 'react-toastify';

type ShortenedURL = {
  id: number;
  hash: string;
  url: string;
  counter: number;
};

export default function Home() {
  const [urlShortening, setUrlShortening] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<ShortenedURL[]>([]);
  const [loading, setLoading] = useState<string | null>();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const circumference = 48 * 2 * Math.PI;
  const [percent, setPercent] = useState(0);

  const loadUrls = async () => {
    setLoading('get-urls');

    const { data } = await getShortenedURLs();

    setShortenedUrls(data);

    setPercent((data.length / 10) * 100);

    setLoading(null);
  };

  useEffect(() => {
    loadUrls();
  }, []);

  const shorten = async () => {
    setLoading('shorten');

    try {
      await shortenAPI(urlShortening);
      setUrlShortening('');
      await loadUrls();
    } catch (error) {
      notify('Invalid URL!');
    }

    setLoading(null);
  };

  const notify = (text: string) => toast(text);

  const LoadingSpinner = () => (
    <div className='flex flex-row justify-center w-full py-2'>
      <svg
        aria-hidden='true'
        className='w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
        viewBox='0 0 100 101'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
          fill='currentColor'
        />
        <path
          d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
          fill='currentFill'
        />
      </svg>
    </div>
  );

  return (
    <div className='flex flex-col bg-[#1E1E1E] justify-center items-center min-w-[1435px]'>
      <div className='flex flex-col justify-center align-center'>
        <div className='flex flex-row h-[110px] px-[130px] py-[38px] justify-between bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E] to-[#022a5d]'>
          <Image alt='logo' width={113} height={32} src='/Logo.png' />
          <div className='flex flex-row items-center space-x-2'>
            <div className='flex flex-row items-center space-x-1 mx-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-[13px] h-[13px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
                />
              </svg>
              <span>EN</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              color='white'
            >
              <path
                fill='#2596be'
                d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
              />
            </svg>
            <svg
              width='22'
              height='16'
              viewBox='0 0 22 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M8.64237 10.5451L8.30208 15.0122C8.78895 15.0122 8.99981 14.817 9.25267 14.5827L11.5353 12.5467L16.2651 15.7794C17.1326 16.2306 17.7437 15.993 17.9777 15.0346L21.0824 1.45712L21.0832 1.45632C21.3584 0.259523 20.6195 -0.208475 19.7744 0.085124L1.52534 6.60589C0.279887 7.05709 0.298744 7.70508 1.31363 7.99868L5.97917 9.35308L16.8163 3.02431C17.3263 2.70911 17.79 2.88351 17.4086 3.19871L8.64237 10.5451Z'
                fill='#2596be'
              />
            </svg>
            <svg
              width='21'
              height='16'
              viewBox='0 0 21 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M19.0706 1.88042L20.7121 0.337684V0H15.0258L10.9732 9.90989L6.36263 0H0.400339V0.337684L2.31777 2.60547C2.50463 2.77305 2.60234 3.01811 2.57748 3.26484V12.1768C2.63663 12.4977 2.53034 12.8278 2.30063 13.0611L0.140625 15.6328V15.9663H6.26491V15.6286L4.10491 13.0611C3.87091 12.8269 3.76034 12.5027 3.80748 12.1768V4.46821L9.18348 15.9705H9.80834L14.4309 4.46821V13.6312C14.4309 13.8728 14.4309 13.9225 14.2698 14.0808L12.6069 15.6615V16H20.6743V15.6623L19.0715 14.1204C18.9309 14.016 18.8581 13.8408 18.8881 13.6707V2.33011C18.8581 2.15916 18.9301 1.984 19.0706 1.88042Z'
                fill='#2596be'
              />
            </svg>
          </div>
        </div>
        <div
          className={`h-[315px] bg-blue-200 bg-[url('/banner.png')] bg-cover px-[118px] py-[86px]`}
        >
          <div className='flex flex-col backdrop-blur-lg p-[20px] w-[301px] rounded-[6px] border border-[rgba(255,255,255,0.3)]'>
            <span className='font-semibold text-[12px]'>Welcome</span>
            <span className='font-bold text-[20px]'>To Our URL shortener</span>
          </div>
        </div>
        <div className='flex flex-col h-full bg-black-200 px-[118px] py-[50px] bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E] to-[#022a5d]'>
          <div className='flex flex-row space-x-[22px]'>
            <Card title='Shorten URL' className='flex grow h-[224px]'>
              <div className='flex flex-col grow justify-center items-center px-2'>
                <div className='flex flex-row justify-center items-center w-[474px] h-[55px] border border-[rgba(255,255,255,0.3)] rounded-[55px] px-8 py-1 pr-[1px] space-x-4'>
                  <input
                    value={urlShortening}
                    onChange={({ target: { value } }) => {
                      setUrlShortening(value);
                    }}
                    className='flex grow h-full caret-none outline-none bg-transparent'
                    placeholder='Type a URL to shorten...'
                  />
                  <button
                    disabled={urlShortening === '' || loading === 'shorten'}
                    onClick={shorten}
                    className='flex justify-center items-center px-[10px] py-[24px] bg-gradient-to-r from-[#4143A8] to-[#2596be] cursor-pointer border border-[rgba(255,255,255,0.3)] disabled:opacity-80 disabled:cursor-not-allowed hover:opacity-70 w-[125px] h-[40px] rounded-[40px] cursor-pointer'
                  >
                    Shorten
                  </button>
                </div>
                {loading === 'shorten' && <LoadingSpinner />}
              </div>
            </Card>

            <Card
              title='URLs shortened'
              titleIcon={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                  />
                </svg>
              }
              className='w-[380px] h-[224px]'
            >
              <div className='flex grow justify-between items-center px-12'>
                {loading === 'get-urls' && <LoadingSpinner />}
                {(!loading || loading !== 'get-urls') && (
                  <>
                    <div>
                      <div
                        x-data='scrollProgress'
                        className='inline-flex items-center justify-center overflow-hidden rounded-full bottom-5 left-5'
                      >
                        <svg className='w-[106px] h-[106px]'>
                          <circle
                            className='text-gray-700'
                            strokeWidth='5'
                            stroke='currentColor'
                            fill='transparent'
                            r='48'
                            cx='53'
                            cy='53'
                          />
                          <circle
                            className='text-[#6BFCFC]'
                            strokeWidth='8'
                            strokeDasharray={circumference}
                            strokeDashoffset={
                              circumference - (percent / 100) * circumference
                            }
                            strokeLinecap='round'
                            stroke='currentColor'
                            fill='transparent'
                            r='47'
                            cx='53'
                            cy='53'
                          />
                        </svg>
                        <span className='text-[28px] font-semibold text-white ml-[-80px] pr-[40px]'>
                          {percent}%
                        </span>
                      </div>
                    </div>
                    <div className='text-[56px] font-bold'>
                      {shortenedUrls.length}/10
                    </div>
                  </>
                )}
              </div>
            </Card>

            <div className='flex flex-col justify-between text-[20px] font-bold'>
              <Card className='max-w-[212px] h-24 p-3'>
                This is a mock app for an exercise
              </Card>
              <Card className='max-w-[212px] h-24 p-3'>
                {`It won't be used in production`}
              </Card>
            </div>
          </div>
        </div>
        <div className='bg-black px-[118px] bg-gradient-to-r from-[#1E1E1E] via-[#1E1E1E] to-[#022a5d]'>
          <span className='text-[24px] font-bold'>URLs Shortened</span>
          {loading === 'get-urls' && <LoadingSpinner />}
          {(!loading || loading !== 'get-urls') &&
            shortenedUrls.length === 0 && (
              <div className='flex flex-row justify-center w-full my-6'>
                <span>No shortened URLs yet.</span>
              </div>
            )}
          {(!loading || loading !== 'get-urls') && shortenedUrls.length > 0 && (
            <div className='flex flex-col grow max-h-[700px] mt-[21px] overflow-y-auto'>
              {shortenedUrls.map((url: ShortenedURL) => (
                <div
                  key={url.id}
                  className='flex flex-row grow py-[35px] mb-[21px] justify-between items-center px-[38px] border border-[rgba(255,255,255,0.3)] rounded-[6px]'
                >
                  <div className='w-2/6 underline cursor-pointer'>
                    {API_URL}/{url.hash}
                  </div>
                  <div className='flex flex-row w-4/6'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
                      />
                    </svg>
                    <span className='ml-4 truncate max-w-[350px]'>
                      Full Link: {url.url}
                    </span>
                  </div>
                  {/* <div className='text-center'>Redirects: {url.counter}</div> */}
                  <div className='flex flex-row justify-end items-center w-2/6'>
                    <div
                      onClick={() => {
                        navigator.clipboard.writeText(`${API_URL}/${url.hash}`);

                        notify('URL copied to clipboard!');
                      }}
                      className='py-[10px] px-[46px] mr-[24px] bg-gradient-to-r from-[#4143A8] to-[#2596be] rounded-[6px] cursor-pointer border border-[rgba(255,255,255,0.3)] hover:opacity-70'
                    >
                      Copy
                    </div>
                    <svg
                      width='24'
                      height='6'
                      viewBox='0 0 24 6'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M3.58564 6C4.35326 6 5.08943 5.68393 5.63222 5.12132C6.175 4.55871 6.47994 3.79565 6.47994 3C6.47994 2.20435 6.175 1.44129 5.63222 0.878679C5.08943 0.31607 4.35326 0 3.58564 0C2.81803 0 2.08185 0.31607 1.53906 0.878679C0.996279 1.44129 0.691345 2.20435 0.691345 3C0.691345 3.79565 0.996279 4.55871 1.53906 5.12132C2.08185 5.68393 2.81803 6 3.58564 6ZM12.2685 6C13.0361 6 13.7723 5.68393 14.3151 5.12132C14.8579 4.55871 15.1628 3.79565 15.1628 3C15.1628 2.20435 14.8579 1.44129 14.3151 0.878679C13.7723 0.31607 13.0361 0 12.2685 0C11.5009 0 10.7647 0.31607 10.2219 0.878679C9.67916 1.44129 9.37423 2.20435 9.37423 3C9.37423 3.79565 9.67916 4.55871 10.2219 5.12132C10.7647 5.68393 11.5009 6 12.2685 6ZM20.9514 6C21.719 6 22.4552 5.68393 22.998 5.12132C23.5408 4.55871 23.8457 3.79565 23.8457 3C23.8457 2.20435 23.5408 1.44129 22.998 0.878679C22.4552 0.31607 21.719 0 20.9514 0C20.1838 0 19.4476 0.31607 18.9048 0.878679C18.362 1.44129 18.0571 2.20435 18.0571 3C18.0571 3.79565 18.362 4.55871 18.9048 5.12132C19.4476 5.68393 20.1838 6 20.9514 6Z'
                        fill='#575757'
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className='flex flex-row justify-between h-[329px] bg-[#1A1C29] px-[130px] py-[80px]'>
          <div className='flex flex-col'>
            <Image alt='logo' width={166} height={29} src='/logo-footer.png' />
            <span className='max-w-[305px] text-[14px] pt-[22px]'>
              Seedify.fund is a Blockchain Gaming focused Incubator and
              Launchpad. Through staking $SFUND, become eligible to buy game
              tokens before everyone else, and have an edge in the play to earn
              era!
            </span>
          </div>
          <div className='flex flex-col text-[14px] space-y-[20px] w-[250px]'>
            <span className='text-[18px] font-semibold'>Company</span>
            <div className='flex flex-row justify-between'>
              <span>Seedify Home Page</span>
              <span className='w-[80px]'>Our blog</span>
            </div>
            <div className='flex flex-row justify-between'>
              <span>About us</span>
              <span className='w-[80px]'>Contact Us</span>
            </div>
          </div>
          <div className='flex flex-col space-y-[16px]'>
            <span>Never miss updates</span>
            <div className='flex flex-row justify-between items-center border border-[rgba(54, 57, 79, 0.5)] bg-[#36394F]/50 bg-opacity- h-[50px] w-[254px] pr-[2px] pl-2'>
              <input
                className='flex grow h-full caret-none outline-none bg-transparent'
                placeholder='Enter your mail address'
              />
              <div className='flex flex-col w-[38px] h-[38px] border border-[#7BF5FB] bg-[rgba(123, 245, 251, 0.2)] justify-center items-center cursor-pointer hover:opacity-70'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
                  />
                </svg>
              </div>
            </div>
            <span>Follow us on</span>
            <div className='flex flex-row justify-between'>
              <div className='p-1 rounded-full bg-[#343FA1] cursor-pointer hover:opacity-70 cursor-pointer hover:opacity-70'>
                <svg
                  className='rounded-full'
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M18.8961 0H1.10389C0.81112 0 0.530341 0.116302 0.323322 0.323322C0.116302 0.530341 0 0.81112 0 1.10389V18.8964C7.36591e-05 19.1891 0.116409 19.4698 0.32342 19.6768C0.530431 19.8837 0.811168 20 1.10389 20H10.6825V12.255H8.07611V9.23667H10.6825V7.01056C10.6825 4.42722 12.2603 3.02083 14.5647 3.02083C15.6686 3.02083 16.6172 3.10278 16.8939 3.13972V5.83944L15.2956 5.84028C14.0422 5.84028 13.7997 6.43583 13.7997 7.30972V9.23694H16.7886L16.3994 12.2553H13.7997V20H18.8964C19.1891 19.9999 19.4698 19.8836 19.6768 19.6766C19.8837 19.4696 20 19.1888 20 18.8961V1.10389C20 0.81112 19.8837 0.530341 19.6767 0.323322C19.4697 0.116302 19.1889 0 18.8961 0Z'
                    fill='#6BFCFC'
                  />
                </svg>
              </div>
              <div className='p-1 rounded-full bg-[#343FA1] cursor-pointer hover:opacity-70'>
                <svg
                  className='rounded-full'
                  width='23'
                  height='18'
                  viewBox='0 0 23 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M19.4954 1.83298C18.0779 1.19367 16.5583 0.721136 14.9693 0.45244C14.9552 0.449724 14.9405 0.451475 14.9274 0.457451C14.9143 0.463427 14.9034 0.473332 14.8961 0.485796C14.7016 0.827687 14.4847 1.27335 14.3328 1.62543C12.6475 1.37364 10.9342 1.37364 9.2489 1.62543C9.07965 1.23523 8.8888 0.854764 8.67723 0.485796C8.67006 0.473179 8.65921 0.463049 8.64613 0.456758C8.63305 0.450467 8.61837 0.448315 8.60403 0.450587C7.01595 0.719282 5.49643 1.19182 4.07791 1.83205C4.0657 1.83717 4.05536 1.8459 4.04826 1.85707C1.16488 6.09596 0.374547 10.2302 0.762766 14.3125C0.763846 14.3225 0.766949 14.3321 0.771887 14.3409C0.776825 14.3497 0.783494 14.3573 0.791488 14.3634C2.47444 15.5887 4.35155 16.5221 6.34421 17.1245C6.3581 17.1288 6.37296 17.1288 6.38685 17.1245C6.40073 17.1202 6.41299 17.1118 6.42204 17.1004C6.85084 16.527 7.23081 15.9186 7.55797 15.2816C7.56251 15.2729 7.56513 15.2633 7.56565 15.2535C7.56616 15.2437 7.56457 15.2339 7.56096 15.2248C7.55736 15.2156 7.55184 15.2074 7.54477 15.2006C7.5377 15.1938 7.52925 15.1885 7.51999 15.1853C6.92145 14.9599 6.34151 14.6879 5.78551 14.3718C5.77552 14.3661 5.7671 14.358 5.76101 14.3482C5.75492 14.3385 5.75135 14.3273 5.75061 14.3159C5.74988 14.3044 5.752 14.2929 5.7568 14.2824C5.7616 14.272 5.76892 14.2629 5.7781 14.256C5.89484 14.1698 6.01159 14.0799 6.12277 13.99C6.13278 13.982 6.14483 13.9768 6.15759 13.9752C6.17035 13.9735 6.18332 13.9755 6.19504 13.9808C9.83354 15.6152 13.7741 15.6152 17.37 13.9808C17.3817 13.9752 17.3948 13.973 17.4078 13.9744C17.4207 13.9759 17.433 13.981 17.4432 13.9891C17.5544 14.0799 17.6702 14.1698 17.7878 14.256C17.7971 14.2627 17.8046 14.2717 17.8095 14.2821C17.8145 14.2925 17.8168 14.3039 17.8162 14.3154C17.8157 14.3268 17.8123 14.338 17.8064 14.3478C17.8004 14.3577 17.7922 14.3659 17.7823 14.3718C17.2282 14.6905 16.6519 14.9601 16.0469 15.1843C16.0376 15.1877 16.0291 15.193 16.0221 15.1999C16.015 15.2068 16.0095 15.2152 16.0059 15.2244C16.0023 15.2336 16.0007 15.2435 16.0012 15.2533C16.0017 15.2632 16.0044 15.2729 16.0089 15.2816C16.3425 15.9182 16.7242 16.5241 17.1439 17.0995C17.1526 17.1113 17.1648 17.1201 17.1787 17.1248C17.1926 17.1294 17.2077 17.1296 17.2217 17.1254C19.2178 16.5247 21.098 15.5909 22.7828 14.3634C22.791 14.3577 22.7979 14.3503 22.803 14.3416C22.8081 14.333 22.8114 14.3234 22.8124 14.3134C23.2757 9.59363 22.036 5.49279 19.5242 1.85892C19.518 1.84711 19.5078 1.83791 19.4954 1.83298ZM8.10185 11.8266C7.00669 11.8266 6.10331 10.8361 6.10331 9.62143C6.10331 8.40582 6.98908 7.41628 8.10185 7.41628C9.22296 7.41628 10.118 8.41416 10.1004 9.62143C10.1004 10.837 9.21462 11.8266 8.10185 11.8266ZM15.491 11.8266C14.3949 11.8266 13.4924 10.8361 13.4924 9.62143C13.4924 8.40582 14.3773 7.41628 15.491 7.41628C16.6121 7.41628 17.5071 8.41416 17.4895 9.62143C17.4895 10.837 16.613 11.8266 15.491 11.8266Z'
                    fill='#6BFCFC'
                  />
                </svg>
              </div>
              <div className='p-1 rounded-full bg-[#343FA1] cursor-pointer hover:opacity-70'>
                <svg
                  className='rounded-full'
                  width='22'
                  height='18'
                  viewBox='0 0 22 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M21.5771 2.24534C20.8035 2.58816 19.9724 2.81979 19.0986 2.92449C20.0002 2.38505 20.6746 1.53605 20.9962 0.535883C20.1492 1.03898 19.2222 1.39311 18.2555 1.58287C17.6054 0.888768 16.7444 0.428707 15.806 0.274113C14.8677 0.119519 13.9046 0.27904 13.0662 0.72791C12.2278 1.17678 11.5611 1.88989 11.1695 2.75651C10.7779 3.62314 10.6834 4.5948 10.9007 5.52064C9.18442 5.43447 7.50549 4.98839 5.97281 4.21136C4.44013 3.43433 3.08797 2.3437 2.00407 1.01027C1.63345 1.64958 1.42035 2.39081 1.42035 3.18021C1.41994 3.89086 1.59494 4.59063 1.92983 5.21742C2.26472 5.84421 2.74915 6.37865 3.34013 6.77332C2.65475 6.75151 1.98449 6.56631 1.38514 6.23315V6.28874C1.38507 7.28545 1.72984 8.25149 2.36095 9.02294C2.99206 9.79439 3.87064 10.3237 4.8476 10.5212C4.2118 10.6932 3.54521 10.7186 2.89817 10.5953C3.17382 11.4529 3.71074 12.2028 4.43378 12.7401C5.15682 13.2774 6.02979 13.5752 6.93045 13.5917C5.40152 14.7919 3.51329 15.443 1.56952 15.4401C1.2252 15.4402 0.881177 15.4201 0.539215 15.3799C2.51225 16.6485 4.809 17.3218 7.15468 17.3191C15.0951 17.3191 19.4359 10.7426 19.4359 5.03884C19.4359 4.85354 19.4313 4.66638 19.4229 4.48107C20.2673 3.87046 20.9961 3.11433 21.5753 2.24812L21.5771 2.24534Z'
                    fill='#6BFCFC'
                  />
                </svg>
              </div>
              <div className='p-1 rounded-full bg-[#343FA1] cursor-pointer hover:opacity-70'>
                <svg
                  className='rounded-full'
                  width='23'
                  height='20'
                  viewBox='0 0 23 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.431 18.8808C17.7261 19.0898 18.1065 19.142 18.4457 19.0137C18.7849 18.8844 19.0342 18.5948 19.1094 18.2437C19.906 14.5 21.8383 5.02443 22.5634 1.61901C22.6184 1.36235 22.5267 1.0956 22.325 0.924181C22.1234 0.752764 21.8438 0.703264 21.5944 0.795847C17.7509 2.21851 5.91395 6.65976 1.07578 8.45001C0.768697 8.56368 0.568864 8.85885 0.578947 9.18243C0.589947 9.50693 0.808114 9.78835 1.12253 9.88276C3.29228 10.5318 6.14036 11.4347 6.14036 11.4347C6.14036 11.4347 7.47136 15.4543 8.16528 17.4984C8.25236 17.7551 8.45311 17.9568 8.71803 18.0264C8.98203 18.0952 9.26436 18.0228 9.46145 17.8367C10.5761 16.7843 12.2994 15.1573 12.2994 15.1573C12.2994 15.1573 15.5738 17.558 17.431 18.8808ZM7.33845 10.9268L8.87753 16.0033L9.21945 12.7886C9.21945 12.7886 15.1659 7.42518 18.5557 4.3681C18.6547 4.27826 18.6684 4.12793 18.5859 4.02251C18.5044 3.9171 18.354 3.89235 18.2413 3.96385C14.3124 6.47276 7.33845 10.9268 7.33845 10.9268Z'
                    fill='#6BFCFC'
                  />
                </svg>
              </div>
              <div className='p-1 rounded-full bg-[#343FA1] cursor-pointer hover:opacity-70'>
                <svg
                  className='rounded-full'
                  width='23'
                  height='20'
                  viewBox='0 0 23 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M17.431 18.8808C17.7261 19.0898 18.1065 19.142 18.4457 19.0137C18.7849 18.8844 19.0342 18.5948 19.1094 18.2437C19.906 14.5 21.8383 5.02443 22.5634 1.61901C22.6184 1.36235 22.5267 1.0956 22.325 0.924181C22.1234 0.752764 21.8438 0.703264 21.5944 0.795847C17.7509 2.21851 5.91395 6.65976 1.07578 8.45001C0.768697 8.56368 0.568864 8.85885 0.578947 9.18243C0.589947 9.50693 0.808114 9.78835 1.12253 9.88276C3.29228 10.5318 6.14036 11.4347 6.14036 11.4347C6.14036 11.4347 7.47136 15.4543 8.16528 17.4984C8.25236 17.7551 8.45311 17.9568 8.71803 18.0264C8.98203 18.0952 9.26436 18.0228 9.46145 17.8367C10.5761 16.7843 12.2994 15.1573 12.2994 15.1573C12.2994 15.1573 15.5738 17.558 17.431 18.8808ZM7.33845 10.9268L8.87753 16.0033L9.21945 12.7886C9.21945 12.7886 15.1659 7.42518 18.5557 4.3681C18.6547 4.27826 18.6684 4.12793 18.5859 4.02251C18.5044 3.9171 18.354 3.89235 18.2413 3.96385C14.3124 6.47276 7.33845 10.9268 7.33845 10.9268Z'
                    fill='#6BFCFC'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
