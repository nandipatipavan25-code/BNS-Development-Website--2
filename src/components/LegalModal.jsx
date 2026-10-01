import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-black/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-brand-graphite border border-brand-border rounded-2xl p-6 sm:p-8 z-10 text-brand-steel space-y-4 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-4 border-b border-brand-border text-brand-heading">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-red" />
              <h3 className="font-display font-semibold text-xl tracking-tight text-brand-heading">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-brand-red text-brand-heading transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-xs font-sans text-brand-red font-medium">
            {isPrivacy ? 'Last Updated: October 2026 • BNS Development' : 'Last Revised: October 2026 • BNS Development LLC'}
          </div>

          {isPrivacy ? (
            <div className="space-y-4 text-sm font-sans leading-relaxed text-brand-body">
              <p>
                BNS Development ("BNS Development," "we," "our," or "us") respects your privacy and is committed to protecting the information you provide when you visit our website or contact us.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Information We Collect</h4>
              <p>
                We may collect information that you voluntarily provide when you submit a contact form, submit a project inquiry, apply for a career opportunity, request information about our services, or communicate with us by email, phone or through our website.
              </p>
              <p>
                This information may include your name, company name, email address, phone number, project information, resume and other information you choose to provide.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">How We Use Your Information</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-brand-body">
                <li>Respond to your inquiries</li>
                <li>Understand your project requirements</li>
                <li>Provide information about our services</li>
                <li>Evaluate employment applications</li>
                <li>Communicate with you regarding your inquiry</li>
                <li>Improve our website, services and communications</li>
                <li>Maintain business and communication records</li>
              </ul>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Information Sharing</h4>
              <p>
                BNS Development does not sell or rent your personal information.
              </p>
              <p>
                We may share information with service providers or professional partners when reasonably necessary to operate our website, respond to your inquiry or provide requested services. We may also disclose information when required by law or when necessary to protect our rights, property or safety.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Cookies and Analytics</h4>
              <p>
                Our website may use cookies, analytics tools and similar technologies to understand website traffic, improve functionality and enhance the user experience. You may be able to manage or disable cookies through your browser settings.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Data Security</h4>
              <p>
                We take reasonable measures to protect information submitted through our website. However, no method of transmitting or storing information electronically can be guaranteed to be completely secure.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Third-Party Websites</h4>
              <p>
                Our website may contain links to third-party websites. BNS Development is not responsible for the privacy practices, content or security of external websites.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Your Privacy Choices</h4>
              <p>
                If you have submitted personal information to BNS Development and would like to request information about how your information is being used or request an update to your information, please contact us.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Changes to This Privacy Policy</h4>
              <p>
                BNS Development may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Contact Us</h4>
              <div className="space-y-1 text-xs font-mono text-brand-body">
                <p>Email: <a href="mailto:contact@bns-development.com" className="text-brand-red hover:underline">contact@bns-development.com</a></p>
                <p>Phone: <a href="tel:7863683009" className="text-brand-red hover:underline">(786) 368-3009</a></p>
                <p>South Florida HQ: Miami · Fort Lauderdale · Palm Beach</p>
                <p>Central Texas Ops: Austin · Dallas-Fort Worth Metro</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-sm font-sans leading-relaxed text-brand-body">
              <p>
                Welcome to the BNS Development website. By accessing or using this website, you agree to these Terms &amp; Conditions. If you do not agree with these terms, please do not use this website.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Use of This Website</h4>
              <p>
                The content provided on this website is intended for general informational purposes. You may view, access and use the website for lawful purposes only.
              </p>
              <p>
                You agree not to use the website for unlawful purposes, attempt to gain unauthorized access, interfere with the website's operation, copy or reproduce website content without permission, or use website content in a way that could misrepresent BNS Development.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Website Content</h4>
              <p>
                BNS Development makes reasonable efforts to provide accurate and current information on this website. However, website content may change over time and may not always reflect the latest information about our services, projects or company.
              </p>
              <p>
                Information on this website should not be considered a substitute for project-specific professional advice, contractual documents or formal agreements.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Project Information</h4>
              <p>
                Project information, descriptions, images, specifications and other materials displayed on this website are provided for informational purposes.
              </p>
              <p>
                Past project experience does not guarantee that future projects will have the same scope, schedule, budget, results or other characteristics. Specific project terms and responsibilities are established through individual agreements and contracts.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Intellectual Property</h4>
              <p>
                Unless otherwise stated, content on this website, including text, graphics, logos, images, design elements and other materials, is owned by or licensed to BNS Development. You may not reproduce, distribute, modify, publish or commercially use website content without prior written permission.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Third-Party Links</h4>
              <p>
                This website may contain links to third-party websites. These links are provided for convenience and do not mean that BNS Development endorses or assumes responsibility for the content, services or practices of those websites.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">User Submissions</h4>
              <p>
                If you submit information through our website, including project inquiries, resumes, documents or other materials, you represent that the information provided is accurate and that you have the right to submit it.
              </p>
              <p>
                You should not submit confidential information through a general website form unless specifically requested through an appropriate secure process.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">No Guarantee</h4>
              <p>
                BNS Development does not guarantee that the website will always be available, uninterrupted, error-free or free from harmful components. We may modify, suspend or discontinue any part of the website at any time.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Limitation of Liability</h4>
              <p>
                To the extent permitted by applicable law, BNS Development will not be responsible for losses or damages arising from your use of, or inability to use, this website or reliance on information provided through the website.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Changes to These Terms</h4>
              <p>
                BNS Development may update these Terms &amp; Conditions from time to time. Updated terms will be posted on this page with a revised date.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Governing Law</h4>
              <p>
                These Terms &amp; Conditions shall be governed by the applicable laws of the jurisdiction in which BNS Development operates, unless otherwise provided by a written agreement between the parties.
              </p>

              <h4 className="text-brand-subheading font-semibold font-display text-base">Contact Us</h4>
              <div className="space-y-1 text-xs font-mono text-brand-body">
                <p>Email: <a href="mailto:contact@bns-development.com" className="text-brand-red hover:underline">contact@bns-development.com</a></p>
                <p>Phone: <a href="tel:7863683009" className="text-brand-red hover:underline">(786) 368-3009</a></p>
                <p>South Florida HQ: Miami · Fort Lauderdale · Palm Beach</p>
                <p>Central Texas Ops: Austin · Dallas-Fort Worth Metro</p>
              </div>
            </div>
          )}

          <div className="pt-4 border-t border-brand-border flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-brand-black hover:bg-brand-red text-white text-xs tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
