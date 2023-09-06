import { prose } from "@/app/styles/prose";
import { cn } from "@/lib/utils";

const Terms = () => {
  return (
    <div className={cn("w-1/3 prose", prose)}>
      <h2>
        Terms of Use of{" "}
        <span className="website_url">https://jobtracker.juhamikael.info/</span>
      </h2>

      <p>
        Welcome to the <span className="font-bold">Juhamikael Job Tracker</span>
        website {'(the "Website").'}
      </p>

      <p>
        <span className="font-bold">Juhamikael Job Tracker</span> provides this
        Website and Services (located at{" "}
        <span>https://jobtracker.juhamikael.info/</span>) to you subject to the
        notices, terms, and conditions set forth in these terms{" "}
        {'(the "Terms of Use").'} In addition, when you use any of our Services,
        you will be subject to the rules, guidelines, policies, terms, and
        conditions applicable to such service, and they are incorporated into
        this Terms of Use by this reference.
      </p>

      <p>
        These Terms of Use are effective as of{" "}
        <span className="font-bold text-primary">06/09/2023</span>.
      </p>

      <p>
        Your eligibility for use of the Website is contingent upon meeting the
        following conditions:
      </p>

      <ul>
        <li>
          While we utilize email, Google, and GitHub authentication and do not
          have direct knowledge of the {"user's"} age, you affirm that you are
          at least 13 years of age when using the Website and Services.
        </li>

        <li>
          You use the Website and Services according to these Terms of Use and
          all applicable laws and regulations determined by the state and
          country of residence
        </li>

        <li>
          You provide complete and accurate registration information and
          maintain accurate registration information on the Webite
        </li>
        <li>
          You agree and understand that{" "}
          <span className="font-bold">Juhamikael Job Tracker</span>, being a
          personal project, reserves the right to revoke and/or cancel your
          access at any time and without prior notice, especially if you fail to
          meet these criteria or violate any portion of these Terms of Use.
        </li>
      </ul>

      <h3>Use of this Website</h3>

      <p>
        In connection with your use of our Website, you must act responsibly and
        exercise good judgment. Without limiting the foregoing, you will not:
      </p>

      <ul>
        <li>
          Violate any local, state, provincial, national, or other law or
          regulation, or any order of a court
        </li>
        <li>
          Infringe the rights of any person or entity, including without
          limitation, their intellectual property, privacy, publicity or
          contractual rights
        </li>
        <li>
          Interfere with or damage our Services, including, without limitation,
          through the use of viruses, cancel bots, Trojan horses, harmful code,
          flood pings, denial-of-service attacks, packet or IP spoofing, forged
          routing or electronic mail address information or similar methods or
          technology
        </li>
        <li>
          Use automated scripts to collect information or otherwise interact
          with the Services or the Website
        </li>
        <li>
          Enter into this agreement on behalf of another person or entity
          without consent or the legal capacity to make such agreements as a
          representative of an organization or entity
        </li>
      </ul>

      <h3>Intellectual Property</h3>

      <p>
        All code, text, software, scripts, graphics, files, photos, images,
        logos, and materials contained on this Website, or within the Services,
        are the sole property of{" "}
        <span className="font-bold">Juhamikael Job Tracker</span>.
      </p>

      <p>
        Unauthorized use of any materials contained on this Website or within
        the Service may violate copyright laws, trademark laws, the laws of
        privacy and publicity, and/or other regulations and statutes. If you
        believe that any of the materials infringe on any third {"party's"}{" "}
        rights, please contact{" "}
        <span className="font-bold">Juhamikael Job Tracker</span> immediately at
        the address provided below.
      </p>

      <h3>Third Party Websites</h3>

      <p>
        Our Website may link you to other sites on the Internet or otherwise
        include references to information, documents, software, materials and/or
        services provided by other parties. These websites may contain
        information or material that some people may find inappropriate or
        offensive. This Terms of Service was created by{" "}
        <p>
          <a href="https://www.termsusetemplate.com">
            Terms Use Template Generator
          </a>
        </p>
      </p>

      <p>
        These other websites and parties are not under our control, and you
        acknowledge that we are not responsible for the accuracy, copyright
        compliance, legality, decency, or any other aspect of the content of
        such sites, nor are we responsible for errors or omissions in any
        references to other parties or their products and services. The
        inclusion of such a link or reference is provided merely as a
        convenience and does not imply endorsement of, or association with, the
        Website or party by us, or any warranty of any kind, either express or
        implied.
      </p>

      <h3>Disclaimer of Warranty and Limitation of Liability</h3>

      <p>
        The Website is provided {'"AS IS."'} appfigures, its suppliers,
        officers, directors, employees, and agents exclude and disclaim all
        representations and warranties, express or implied, related to this
        Website or in connection with the Services. You exclude{" "}
        <span className="font-bold">Juhamikael Job Tracker</span> from all
        liability for damages related to or arising out of the use of this
        Website.
      </p>

      <h3>Changes to these Terms of Use</h3>

      <p>
        <span className="font-bold">Juhamikael Job Tracker</span> retains the
        right to, at any time, modify or discontinue, any or all parts of the
        Website without notice.
      </p>

      <p>
        Additionally, <span className="font-bold">Juhamikael Job Tracker</span>{" "}
        reserves the right, in its sole discretion, to modify these Terms of Use
        at any time, effective by posting new terms on the Website with the date
        of modification. You are responsible for reading and understanding the
        terms of this agreement prior to registering with, or using the Service.
        Your use of the Website and/or Services after any such modification has
        been published constitutes your acceptance of the new terms as modified
        in these Terms of Use.
      </p>

      <h3>Governing Law</h3>

      <p>
        These Terms of Use and any dispute or claim arising out of, or related
        to them, shall be governed by and construed in accordance with the
        internal laws of the{" "}
        <span className="font-bold text-primary">Finland</span> without giving
        effect to any choice or conflict of law provision or rule.
      </p>

      <p>
        Any legal suit, action or proceeding arising out of, or related to,
        these Terms of Use or the Website shall be instituted exclusively in the
        federal courts of{" "}
        <span className="font-bold text-primary">Finland</span>.
      </p>
    </div>
  );
};

export default Terms;
