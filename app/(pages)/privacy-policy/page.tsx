import { cn } from "@/lib/utils";
import { prose } from "@/app/styles/prose";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Job Tracker | Privacy Policy",
  description:
    "Simple full stack application to keep track of the jobs you found interesting in simple dashboard, kind of like bookmarks.",
};

const PrivacyPolicy = () => {
  return (
    <div className={cn("w-1/3 prose", prose)}>
      <h1>Privacy Policy of Jobtracker</h1>

      <p>
        Juha Mikael operates the{" "}
        <a href="https://jobtracker.juhamikael.info">
          https://jobtracker.juhamikael.info
        </a>{" "}
        website, which provides the SERVICE.
      </p>

      <p>
        This page is used to inform website visitors regarding our policies with
        the collection, use, and disclosure of Personal Information if anyone
        decided to use our Service, the Job Tracker website.
      </p>

      <p>
        If you choose to use our Service, then you agree to the collection and
        use of information in relation with this policy. The Personal
        Information that we collect are used for providing and improving the
        Service. We will not use or share your information with anyone except as
        described in this Privacy Policy.
      </p>

      <p>
        The terms used in this Privacy Policy have the same meanings as in our
        Terms and Conditions, which is accessible at{" "}
        <Link href="https://jobtracker.juhamikael.info/terms">
          https://jobtracker.juhamikael.info/terms
        </Link>
        , unless otherwise defined in this Privacy Policy.
      </p>

      <h2>Information Collection and Use</h2>

      <p>
        The Job Tracker site gathers user emails, names, and profile pictures
        from Google and GitHub. These details are stored in the {"app's"}{" "}
        database and are used exclusively for identification, enabling users to
        access and utilize the services. Importantly, Juha Mikael does not
        request or store user passwords. Authentication is securely managed via
        codes sent to {"users'"} emails or through GitHub.
      </p>

      <h2>Log Data</h2>

      <p>
        Please be aware that when you visit our Service, the hosting platform,
        <span className="font-bold"> Vercel</span>, might collect certain
        information that your browser sends to the server, commonly referred to
        as Log Data. This Log Data may encompass details like your{" "}
        {"computer's"} Internet Protocol {'("IP")'} address, browser version,
        the specific pages of our Service that you visit, the time and date of
        your visit, the duration spent on those pages, and other related
        statistics.
      </p>

      <h2>Cookies</h2>

      <p>
        Cookies are files with small amount of data that is commonly used an
        anonymous unique identifier. These are sent to your browser from the
        website that you visit and are stored on your {"computer's"} hard drive.
      </p>

      <p>
        The website may use {'"cookies"'} to enhance user experience. However,
        we
        {" don't"} knowingly collect or store any cookies. Cookies are small
        files that may be sent to and stored on your device when you access
        certain online content. You can set your browser to notify you before
        you receive a cookie, giving you the chance to decide whether to accept
        it. You can also set your browser to turn off cookies. If you do so,
        however, some areas of the website might not function properly.
      </p>

      <h2>Service Providers</h2>

      <p>
        We employ third-party services to support and enhance the operation of
        the Job Tracker website. These third-party services include:
      </p>

      <ul>
        <li>
          <Link href="https://supabase.io/" target="_blank">
            Supabase: For database and backend services.
          </Link>
        </li>
        <li>
          <Link href="https://vercel.com/" target="_blank">
            Vercel: As the hosting and deployment platform.
          </Link>
        </li>
        <li>
          <Link href="https://kinde.com/" target="_blank">
            Kinde Auth: For user authentication.
          </Link>
        </li>
      </ul>

      <p>These third-party providers are engaged for the following reasons:</p>

      <ul>
        <li>To facilitate our Service;</li>
        <li>{"To provide the Service on our behalf;"}</li>
        <li>{"To perform Service-related functions;"}</li>
        <li>{"To assist in analyzing how the Service is utilized."}</li>
      </ul>

      <p>
        {"It's"} crucial for users to understand that these third parties may
        have access to certain Personal Information, strictly for performing
        specific tasks on our behalf. They are contractually bound not to
        disclose or use the information for any other purpose. Moreover, these
        services might have their own privacy policies and terms of service. We
        recommend reviewing their respective policies if you have concerns.
      </p>

      <h2>Security</h2>

      <p>
        The trust of users in providing their Personal Information is highly
        valued. As such, every effort is made to use commercially acceptable
        means to protect this information. However, {"it's"} important to note
        that no method of transmission over the internet, or method of
        electronic storage, is 100% secure and reliable. Thus, while the utmost
        care is taken, absolute security cannot be guaranteed.
      </p>

      <h2>Links to Other Sites</h2>

      <p>
        Our Service may contain links to other sites. If you click on a
        third-party link, you will be directed to that site. Note that these
        external sites are not operated by us. Therefore, we strongly advise you
        to review the Privacy Policy of these websites. We have no control over,
        and assume no responsibility for the content, privacy policies, or
        practices of any third-party sites or services.
      </p>

      <h4>{"Children's Privacy"}</h4>

      <p>
        Our Services do not address anyone under the age of 13. We do not
        knowingly collect personal identifiable information from children under
        13. In the case we discover that a child under 13 has provided us with
        personal information, we immediately delete this from our servers. If
        you are a parent or guardian and you are aware that your child has
        provided us with personal information, please contact us so that we will
        be able to do necessary actions.
      </p>

      <h2>Changes to This Privacy Policy</h2>

      <p>
        The Privacy Policy may be updated occasionally. Users are encouraged to
        periodically review this page to stay informed about any changes.
        Updates to the Privacy Policy will be reflected on this page and become
        effective immediately upon posting.
      </p>

      <p>
        Our Privacy Policy was created with the help of the{" "}
        <a href="https://www.privacypolicytemplate.net">
          Privacy Policy Template
        </a>
        .
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or suggestions about our Privacy Policy, do
        not hesitate to{" "}
        <Link href="https://dev.juhamikael.info/contact" target="_blank">
          {"Contact us."}
        </Link>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
