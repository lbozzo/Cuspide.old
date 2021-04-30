import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { Quote } from "../../types/Quote";
import ArrowNarrowRight from "../Icon/arrow-narrow-right";
import Copy from "../Icon/copy";
import DotsCircleHorizontal from "../Icon/dots-circle-horizontal";
import HappyFace from "../Icon/happy-face";
import SadFace from "../Icon/sad-face";
import Twitter from "../Icon/twitter";
import Spinner from "../Spinner";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { cloneElement, useState } from "react";
import CheckCircle from "../Icon/check-circle";

function Error() {
  return (
    <>
      <div className="pt-1">
        <h1 className="text-3xl md:text-5xl leading-normal md:leading-snug font-black text-gray-900 dark:text-gray-100">
          Oh no... Something happened
        </h1>
      </div>
      <div className="flex flex-row items-center pt-5 ">
        <div className="flex flex-1 mr-6 text-gray-500 dark:text-gray-400">
          <p className="leading-snug text-sm md:text-md font-medium">
            We are going to verify right away and fix it as soon as possible. We
            are sorry :(
          </p>
        </div>
      </div>
    </>
  );
}

function Skeleton() {
  return (
    <div className="w-full animate-pulse">
      <div className="h-24 rounded-sm bg-gray-300 dark:bg-gray-400" />
      <div className="flex flex-row pt-5">
        <div className="flex flex-1 h-6 mr-6 rounded-sm bg-gray-300 dark:bg-gray-400" />
        <div className="w-24 h-6 rounded-sm bg-gray-300 dark:bg-gray-400" />
      </div>
    </div>
  );
}

export default function Message() {
  const [copied, setCopied] = useState(false);

  const {
    data: { randomQuote: data } = {},
    error,
    revalidate,
    isValidating,
  } = useSWR<{
    randomQuote: Quote;
  }>(
    `{
      randomQuote {
        text
        author {
          name
        }
      }
    }`,
    fetcher,
    { revalidateOnFocus: false, refreshInterval: 0 }
  );

  return error ? (
    <Error />
  ) : (
    <>
      <div className="flex flex-row">
        <div className="flex flex-1">
          {isValidating ? (
            <div className="w-full animate-pulse">
              <div className="w-16 h-6 rounded-sm bg-gray-300 dark:bg-gray-400" />
            </div>
          ) : (
            data && (
              <div className="flex flex-row -mx-1">
                <div className="mx-1 hover:text-green-600 dark:hover:text-green-400">
                  <HappyFace width={23} height={23} />
                </div>
                <div className="mx-1 hover:text-red-600 dark:hover:text-red-400">
                  <SadFace width={23} height={23} />
                </div>
              </div>
            )
          )}
        </div>
        <div className="flex flex-row items-center">
          {isValidating && <Spinner />}
          <button onClick={() => revalidate()}>
            <ArrowNarrowRight width={23} height={23} />
          </button>
        </div>
      </div>
      <div className="pt-3">
        {isValidating ? (
          <Skeleton />
        ) : (
          data && (
            <>
              <h1 className="text-3xl md:text-5xl leading-normal md:leading-snug font-black text-gray-900 dark:text-gray-100">
                {data.text}
              </h1>
              <div className="flex flex-row items-center pt-5 ">
                <div className="flex flex-1 mr-6 text-gray-500 dark:text-gray-400">
                  <p className="leading-snug text-sm md:text-md font-medium">
                    {data.author.name}
                  </p>
                </div>
                <div className="flex flex-row -mx-1 text-gray-800 dark:text-gray-200">
                  <div className="px-1">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURI(
                        `"${data.text}" - ${data.author.name}.\u000a${process.env.NEXT_PUBLIC_TWITTER_ACCOUNT} `
                      )}&hashtags=${encodeURI(`motivation`)}`}
                      target="__blank"
                      aria-label="Share on Twitter"
                      title="Share on Twitter"
                    >
                      <Twitter width={21} height={21} aria-hidden={true} />
                    </a>
                  </div>
                  <div className="px-1">
                    <CopyToClipboard
                      text={`"${data.text}" - ${data.author.name}. Check out more motivational quotes at ${window.location.href} `}
                      onCopy={() => {
                        setCopied(true);
                        setTimeout(() => {
                          setCopied(false);
                        }, 1150);
                      }}
                    >
                      <span
                        aria-label="Copy to Clipboard"
                        title="Copy to clipboard"
                      >
                        {cloneElement(copied ? <CheckCircle /> : <Copy />, {
                          width: 21,
                          height: 21,
                          "aria-hidden": true,
                        })}
                      </span>
                    </CopyToClipboard>
                  </div>
                  {navigator.share && (
                    <div className="px-1">
                      <button
                        aria-label="Share"
                        title="Share"
                        onClick={async () => {
                          try {
                            await navigator.share({
                              title: process.env.NEXT_PUBLIC_APP_NAME,
                              text: `"${data.text}" - ${data.author.name}.`,
                              url: window.location.href,
                            });
                          } catch (err) {
                            console.error("Share failed:", err.message);
                          }
                        }}
                      >
                        <DotsCircleHorizontal
                          width={21}
                          height={21}
                          aria-hidden={true}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  );
}
