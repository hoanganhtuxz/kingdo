const DEFAULT_CONTACT = {
  phone_number: "0913228637",
  zalo_number: "https://zalo.me/0913228637?",
  facebook_url: "https://www.facebook.com/people/Kinh-Đô-Group/100064511477673/",
  linkedin_url: "https://www.linkedin.com/company/kinhdogroup/",
};

export default function FixedButon({ contactInfo }) {
  const phone = contactInfo?.phone_number || DEFAULT_CONTACT.phone_number;
  const zalo = contactInfo?.zalo_number || DEFAULT_CONTACT.zalo_number;
  const facebook = contactInfo?.facebook_url || DEFAULT_CONTACT.facebook_url;
  const linkedin = contactInfo?.linkedin_url || DEFAULT_CONTACT.linkedin_url;

  return (
    <div className="fixed-buton">
      <ul>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img
              width={40}
              src="https://kinhdogroup.com.vn/uploads/linkedin_brands_solid_full_cb06598546.svg?updated_at=2026-05-09T15:20:57.280Z"
              alt="LinkedIn"
              style={{
                "background-color": "rgba(21, 82, 129, 1.00)",
                padding: "5px",
              }}
            />
          </a>
        </li>
        <li>
          <a href={`tel:${phone}`}>
            <img
              width={40}
              src="https://kinhdogroup.com.vn/uploads/phone_solid_full_2_572063437c.svg?updated_at=2026-05-09T15:16:13.510Z"
              alt="Phone"
               style={{
                "background-color": "rgba(99, 230, 190, 1.00)",
                padding: "5px",
              }}
            />
          </a>
        </li>
        <li>
          <a href={zalo} target="_blank" rel="noopener noreferrer">
            <img
              width={40}
              src="https://kinhdogroup.com.vn/uploads/Logo_Zalo_Arc_37e51cbf99.webp?updated_at=2026-05-09T15:31:01.043Z"
              alt="Zalo"
            />
          </a>
        </li>
        <li>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img
              width={40}
              src="https://kinhdogroup.com.vn/uploads/facebook_brands_solid_full_8def80f7d8.svg?updated_at=2026-05-09T15:25:37.024Z"
              alt="Facebook"
              style={{
                "background-color": "rgba(18, 144, 229, 1.00)",
                padding: "5px",
              }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
