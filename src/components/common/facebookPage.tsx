import { useEffect } from "react";

interface FacebookPagePluginProps {
  pageUrl: string;
  width?: string;
  height?: string;
}

const FacebookPagePlugin: React.FC<FacebookPagePluginProps> = ({
  pageUrl,
  width = "200",
  height = "100",
}) => {
  useEffect(() => {
    // Add fb-root if it doesn't exist
    if (!document.getElementById("fb-root")) {
      const fbRoot = document.createElement("div");
      fbRoot.id = "fb-root";
      document.body.appendChild(fbRoot);
    }

    // Load the SDK script
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      document.body.appendChild(script);
    }

    // Re-render plugin if FB is available
    const interval = setInterval(() => {
      if (
        typeof window !== "undefined" &&
        window.FB &&
        window.FB.XFBML?.parse
      ) {
        window.FB.XFBML.parse();
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className="fb-page"
        data-href={pageUrl}
        data-tabs="timeline"
        data-width={width}
        data-height={height}
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );
};

export default FacebookPagePlugin;
