import React from 'react'
import Layout from '../../src/layouts'
import {withRedux} from '../../src/lib/redux'
import SectionTitle from '../../src/components/section-title'

const Index = () => (
  <Layout>
    <SectionTitle title="Terms of Service" subtitle="Sample terms of service" />
    <div className="w-full text-sm">
      <h6>1. Terms</h6>
      <p className="mb-2 leading-7">
        By accessing the website at{' '}
        <a href="https://dashboard.com">https://dashboard.com</a>, you are
        agreeing to be bound by these terms of service, all applicable laws and
        regulations, and agree that you are responsible for compliance with any
        applicable local laws. If you do not agree with any of these terms, you
        are prohibited from using or accessing this site. The materials
        contained in this website are protected by applicable copyright and
        trademark law.
      </p>
      <h6>2. Use License</h6>
      <ol className="mb-2" type="a">
        <li>
          Permission is granted to temporarily download one copy of the
          materials (information or software) on Dashboard's website for
          personal, non-commercial transitory viewing only. This is the grant of
          a license, not a transfer of title, and under this license you may
          not:
          <ol className="mb-2" type="i">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public
              display (commercial or non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on
              Dashboard's website;
            </li>
            <li>
              remove any copyright or other proprietary notations from the
              materials; or
            </li>
            <li>
              transfer the materials to another person or "mirror" the materials
              on any other server.
            </li>
          </ol>
        </li>
        <li>
          This license shall automatically terminate if you violate any of these
          restrictions and may be terminated by Dashboard at any time. Upon
          terminating your viewing of these materials or upon the termination of
          this license, you must destroy any downloaded materials in your
          possession whether in electronic or printed format.
        </li>
      </ol>
      <h6>3. Disclaimer</h6>
      <ol className="mb-2" type="a">
        <li>
          The materials on Dashboard's website are provided on an 'as is' basis.
          Dashboard makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </li>
        <li>
          Further, Dashboard does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the materials on its website or otherwise relating to such materials
          or on any sites linked to this site.
        </li>
      </ol>
      <h6>4. Limitations</h6>
      <p className="mb-2 leading-7">
        In no event shall Dashboard or its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or
        due to business interruption) arising out of the use or inability to use
        the materials on Dashboard's website, even if Dashboard or a Dashboard
        authorized representative has been notified orally or in writing of the
        possibility of such damage. Because some jurisdictions do not allow
        limitations on implied warranties, or limitations of liability for
        consequential or incidental damages, these limitations may not apply to
        you.
      </p>
      <h6>5. Accuracy of materials</h6>
      <p className="mb-2 leading-7">
        The materials appearing on Dashboard's website could include technical,
        typographical, or photographic errors. Dashboard does not warrant that
        any of the materials on its website are accurate, complete or current.
        Dashboard may make changes to the materials contained on its website at
        any time without notice. However Dashboard does not make any commitment
        to update the materials.
      </p>
      <h6>6. Links</h6>
      <p className="mb-2 leading-7">
        Dashboard has not reviewed all of the sites linked to its website and is
        not responsible for the contents of any such linked site. The inclusion
        of any link does not imply endorsement by Dashboard of the site. Use of
        any such linked website is at the user's own risk.
      </p>
      <h6>7. Modifications</h6>
      <p className="mb-2 leading-7">
        Dashboard may revise these terms of service for its website at any time
        without notice. By using this website you are agreeing to be bound by
        the then current version of these terms of service.
      </p>
      <h6>8. Governing Law</h6>
      <p className="mb-2 leading-7">
        These terms and conditions are governed by and construed in accordance
        with the laws of Delaware, USA and you irrevocably submit to the
        exclusive jurisdiction of the courts in that State or location.
      </p>
    </div>
  </Layout>
)
export default withRedux(Index)
