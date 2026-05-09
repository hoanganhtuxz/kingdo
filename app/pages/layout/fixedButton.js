const DEFAULT_CONTACT = {
  phone_number: "0913228637",
  zalo_number: "0913228637",
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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAd7X///8AcbIAc7MAbLAAb7EAdbSgwtzQ5PAAcrMff7mOuNcZfLfk7fXs8vcAeLYAaq9SmcelyOBnpMzI3uyev9o5j8IpiL6ty+FMlcSCtNW81+j1+/1mn8mVvtrD2+tzqtB6qs9an8rc6PJBkMKz0uWGttauyuEfhLyBrdHP5fHd7PQY42dFAAALc0lEQVR4nOWda4OiLBTHVYS0NU1tstKpdrqs88z3/34PVtN4AwEhYfd/al9U628EzoXDwbJVqwi9PHn7TON1VgZBZEVBUGbrOP18S3IvLJT//5bC3w5Pl+v7Olq6EDo+AMhC1l34XwD4DoTuMlq/7zanUOFTqCL0NsdzgMkA+sYiCAFMGp2PG0/Rk6gg9GZx5EB/AK2BiXzoRNuZCkrZhOEljVw49OIIbxO6UXqRPWKlEi6SGEAgAPcj/P04+ZL5UPIIi80Wib281qvEv7LdyFtjZRGuUigD7wEJIPxYSXoyKYThLHOBLLyHgFvupUxJCYTe7whKxrsJweh40oDQix3Zr++H0Xe2ow3ISMLV2h23dg5CLtcjJ+QowtVWMV8l4J4PExF68UjbxyoE4xFjVZgwTF/EVwnAo7CBFCXc+6/jq+SAvSCjGOEhU2IfaEKwFJuOIoTF8YUDtM6YirxGAcIcORPwVQLg8gLC8N2diK+Sm3J7cryEh/lUL/AuZ847GzkJdy9fYdpCcKeQcJHBifkqwWyhijCXFgCOE0K5GsK9Di/wLvhLAWERTz4Fa4JbZtPIShiW066hbYGS1WwwEnrBFF4MTShgjDfYCHNlYby4EGBbb5gIk+XUOL1aJrII91P6aTS5MzmEV32sRFtwL4Nwpy8gRhx24QYJd7oO0bvcQcQhQo2H6F2DA3WAUCNPjSQ4sNzQCRO9h+hdLt1oUAlzPe1gW0uq6acRevo5Mv0CNAeOQhgGphCigOKGkwmLUjdnmyxQkoMpMmGsV7hElxPzExpgJ+oiR/0kwlyniJ5FkLSgEggXhvFhIUKNCoEwM5Aw4yHUOp4giRBn9BIeTATEiL0J/z7CcG7eGK2E5n2Gv4/w3SRLWJfzzkaYmxBQ9Mvt2V/sEhbmOGsdIb/rvXUJj6aO0Up+Okxo6Dr6re562iYsDLT1dYGsPU7bhHwONwIAQteF8MXVNRR1MlMtwtDhqT93nO0uWZ28Q/J5dnm+qVDID6mEqc/+UzBIaj+2uPp6LFEgpRF67GMUOe3hUBz1iLhgM2vTJIyZpxMoe8p3N+wjQKFAM95vEK6YXyFhCzbXYjLCRs1tg3DL+nzIJ4SbMx2sKdiSCFfMDikkppnPOpgNt/4S64Rr1qdDJQnQ9nRIk4NzPyH7w5FfIf4z6TAT3dpyWiOMmWchoqSYEy1m4kcfocdssJszuaWFDtFlfSX8ITwyrxH+kUJYBCofnVXOZ5cwjJgnkHOlEGqSiIyeE+lJyBFUdPy1hrSwF7UQ40lYsv/p6e9Qi8W0lh/+JmS39niloc7DubrH5tHT6n8Tphxjq2FQ2wp1sBZWLYh6EBY8z4WA7vbQqsLXokG44Xoumk+jx0KDBTcNwi3Xc1H80i8dDP5NaFsn/OKsUdc8trgJoUWNkHfyEONDnfbGH6/hTsjsdH+LEONftIjxH0LxD2HIX+QM5j1vMdEjFfXQIwS6EV4Exhbq1CAvPrRZZe6Clychj7mv/UBWz5d6R6BFpq2mu+91I4zEfgHBaLu7HFaHfJ+WXN1aXqTom9ATHl239jmVNDytYD2SGRWhFilAFboV11oitsIU3exFRcge3RsmFN0J2VNQxsnxboR8cYVRquILTHjUzY7JU5UVxIRnHaYhum2YV3IAsGQ9ETpXhOH0CU7kwCD72M3+5Pkl+ZWe576spg1BiAlPItPQJam5agHi5+ofgtl11QhViq9NGkhpfQNPmFBkofFDgop9HRH8Dhf9Cp8ZOeCmvWcJist2OZ4RO9+WfRUwFk7fM93U8I/8T+LnHoQIvpMP13+NP1ztXDHhu8BfipXw9wChM6c3gTqMbXEA3jGhyD4DIyEldXwjhB9DZ86LnTvqNaK1bRUiPhsrYbeOrk44fHbQHu2PRIUVimxLsxL2VbQ+CV2GI65Yq1G9KtzQEgoOJRAiSN3fqckb43O5npWLjAJWwg/i5+aQTN/WmKJlmFtC+wzjCYNOlSRFI7KwMLHeRGKn8YQRVxdW9mq0zpO+WZ8io3w8IVM7hKcWwquNv7OEMomMhIh8Zo5TwuMUpJbQAHg5oWjC0wKxJbTt/npCUcOP1lYm8r3XExaiJ5Uyi6MGY0pC+5dYvgyVllCEPwHhQnDXILCEpvAEhKK7yxoQhqs/+/2fw6AHILj3ILgIyyO8nP1Hiq0ccAKEE9eTvsNV+dPpHMGBpo9iOcFoUsJfzTwMotXp2PaH0EQMplxLOydQEPFQfeenOQins4e/esI+Wn21UCSL7eFkPs2qL1XokDM7tlC+BfNN5pdmfdMKQYrVEHqH68liC0JuwaH07RSZUDi2mCo+JLT3QXPyV0S8GhwfqozxKYTEmuQleZiKZOdxjK8yT0Mh3JP+W0hu2f1b4GU4b0pzbRRCovmmTMSrACFMlOZLKYTEU2SU7JVIiAhzpTlvCiFxXURrqYSup3TfgkJITEpQKqyFCAurEHG9JRASfzuQShgVltAZF2MIq/1DlXvA0xPe9oAV7uNPT3jbxxcpgTaG8FaLIVJPYw7hSbAmyhjCW02USF2bKYT3ujaR2kQJu9wvIXzUJgps65hC+KgvFUi1mkL4qBEWqPM2hfBR5y1Qq28I4bNWnz/VKqUmSj3h87wFf4hoCKH7ZYueezKE8Hnuif/smhmEtbNr3M63GYS184fcZ0jl1JcqJqyfIeW2F2YQ1s4Bc5/lNoKwcZabtzLOBMLmeXz2Tm0GETZ6KvDGFyYQtvpiFHxnNySdRlBJ2O5twmn0DSBs96fh6jFkBGGnxxDf0Rn9Cbt9ovjqjPUn7On1xdGvTd7JLnWEPf3aOHruGUBYGz0/hCeOv5D2hM5PD+B670v2l6g7Yb2VsFD/Uu0Jl/39S9l70OpOSOpBy2H1pZ0DVkNI7CPMHmHoTUjuBc3ez1tvQko/b+blVGtCWk925r76WhNS++qzXsGiM6HTcoZbhAVbXlFjQoRax2/bd5Sw7dIAj6RdfUMZpKSPfREJUfAf6UtMnnPnatnOTTq95dcd+Q5BzW8j0sco/RUR42/3C3Tul+sQst8AoaVgp9HGX3bfU3uZ6SU0+c4uq73M9BIafe9az6mivrvzUlPHae+Jm3/z/kNT715jv8PyH7iHVJcrHLjUtfVUQvFWG5MJEZqG/S13OpOPn/4193ITm079w3er20VpjvsGSnJPJjKhQYYfBZQD0hRC2zOFEPT2lmQgtHMdLlEb1pJ2ip9OaCfjuha+Ri69oQadUJtbYyjqJGb4CPU3i2RDyEho7/Sei8P9MwcJ7avO/hshnuAjxANVW8TBIcpGiFfUqUkIcgcWGWZCO9FzLnbugREntHOgn4+KENXQcxLa3lw3RBDQXDV+Qjss9QqmnP4Lp0YQ2sWHRksqgjFzC1tmQq2sBqT06RlBaB8sPSYj6xrDT2gvxjaBlyKYcfUg5iLUwYVDDI7aGEL7MJ92TXUGWg+OJ7TDdEofzk1ZjYQ4oW1f/KkWHAfwLDHihHaRyroGhksAHjn6uI8ivN2s8eoVB8GMftuHXEJs/v3XrjgOmIm8wBGEdnh84VAVHKDjCHG8Eb+IEXuhp+HHUUBo26tYyqVMdAF3KzYBZRBixrOr9vpKtDzzmni5hLZ9+lC45gB/yxjnKiS07a9dpMR2IBgdR8w/iYR4XZ1lruyrZIFb7rk9tD5JIcRapRBKq25AAMJ01PJSkyzC6iq4GMmARPhXthth89eRPEKsRYIhx9kPAFGckC+bE5BUQqzwcoxcMUr88tzoeJEy+WqSTVjJm8WRw3WLNUI+dKLtjCs9wSgVhJW8zfEcVJeKDnHeLr6OzsfNaMNHkCrCSuHpcn1fR66LSX2AWZ/XIGAu4GMy143W77vNSfbIrEsl4V1F6OXJ2y6N11kZBJEVBUGZreN095bkXihvzSTpf2PKvUTKO1xbAAAAAElFTkSuQmCC"
              alt="LinkedIn"
            />
          </a>
        </li>
        <li>
          <a href={`tel:${phone}`}>
            <img
              width={40}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-phone.svg/1200px-Circle-icons-phone.svg.png"
              alt="Phone"
            />
          </a>
        </li>
        <li>
          <a href={`http://zalo.me/${zalo}`} target="_blank" rel="noopener noreferrer">
            <img
              width={40}
              src="https://classic.vn/wp-content/uploads/2022/07/zalo-icon.png"
              alt="Zalo"
            />
          </a>
        </li>
        <li>
          <a href={facebook} target="_blank" rel="noopener noreferrer">
            <img
              width={40}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
              alt="Facebook"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
