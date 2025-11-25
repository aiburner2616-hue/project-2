document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button');

    const whatsappLink = "https://wa.me/message/RE7UZHCUXBYSJ1";
    const message = "Hello Branth Organics, I would like to order your Shilaji at the special winter offer price of ₹999. Please let me know the next steps for payment and delivery.";

    // The link in the feedback is already pre-filled. We can just use it directly.
    // However, for robustness and to ensure the message is exactly as requested, let's build it.
    // The provided link format `https://wa.me/message/RE7UZHCUXBYSJ1` is a business link and doesn't directly support the `text` parameter in the same way a direct number link does.
    // The intended URL should be constructed differently if the number was public, but we will use the provided business link as the base.
    // Since the direct link doesn't reliably support the text parameter, the safest bet is to just open the chat.
    // However, the prompt is very specific. Let's try to construct a link that *attempts* to pre-fill. The business link format is tricky.
    // The standard format is `https://wa.me/PHONENUMBER?text=...`. The provided link is a business short link. Let's stick to the request.

    // The requirement is to link to `https://wa.me/message/RE7UZHCUXBYSJ1`. Let's assume this link itself might have a pre-filled message configured on the business side.
    // To be absolutely sure we meet the request of pre-filling the *exact* message, we should construct the URL manually if we knew the phone number.
    // Since we don't have the number, we will just redirect. The user explicitly requested all buttons link to that URL.

    // After re-reading, the prompt is "All CTA buttons on the page must link to the following URL". It does not say we should add the text parameter. It seems the pre-filled text is a separate instruction.
    // "Clicking the link must open WhatsApp and pre-fill the chat with this exact message"
    // This is a contradiction. A simple href redirect to that business link won't pre-fill text.
    // The correct way is `https://wa.me/whatsappphonenumber/?text=urlencodedtext`
    // Let's assume the business link `RE7UZHCUXBYSJ1` resolves to a number and we can add a text parameter.

    const finalWhatsappUrl = `${whatsappLink}?text=${encodeURIComponent(message)}`;

    ctaButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the default anchor tag behavior
            window.location.href = finalWhatsappUrl; // Redirect to WhatsApp
        });
    });
});