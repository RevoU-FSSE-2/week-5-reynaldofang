# Introduction

<h1>Bonjour!~ my name is Reynaldo Fang <img src="https://media.tenor.com/VtFUW-durpoAAAAC/kururin-kuru-kuru.gif" width="65px" height="65px" /></h1>

<h3>This is assignment in week 5 on Full-Stack Engineering - **Project Milestone 1**</h3

If you want to follow me on social media, you can directly click the link below.

[![LinkedIn Badge](https://img.shields.io/badge/-Reynaldo_Fang-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/reynaldo-fang/)
[![Instagram Badge](https://img.shields.io/badge/-reynaldo.fang-white?style=flat&logo=instagram&logoColor=black&color=%2387ceeb)](https://www.instagram.com/reynaldo.fang/)
[![Gmail Badge](https://img.shields.io/badge/-reynaldofang02%40gmail.com-black?style=flat&logo=gmail&color=%23454c53)](mailto:reynaldofang02@gmail.com)


### Deploy Link

You can check my website here

https://reynaldofang.site/

## Project Details

![Skilldemy main](screenshot/skilldemy_main.png)

**Skilldemy** is a platform that offers a wide range of learning opportunities for individuals of all ages. It serves as a server-based platform where learners can acquire diverse skills through innovative vocational methods such as **classes, seminars, and workshops.**

## Tools I Use

- HTML
- CSS
- Javascript
- External/Internal Source
  - Icon
  - Image

## How To Set Up and Run Project

<details close>
<summary><b>Deployment Stage</summary>
<br>

### Buy Domain

**Step 1 :** First you have to buy a domain at [Niagahoster](https://www.niagahoster.co.id/)

![niaga_from](screenshot/niaga_front.png)

**Step 2 :** On the domain name, it's up to you to put the domain name according to your own needs.

![niaga_domain](screenshot/niaga_domain.png)

**Step 3 :** After choosing a domain name is done, make a payment.

![niaga_dashboard](screenshot/niaga_dashboard.png)

Now your domain arleady done.

### Deploy Your Website in Netfliy

**Step 1 :** Open **[Netlify](https://app.netlify.com/)** and Login.

![netlify_homepage](screenshot/netlfliy_homepage.png)

**Step 2 :** Go to tab **"Team Overiew"**

**Step 3 :** Click **"Add new Site"**

![netlify_dashboard](screenshot/net_dashboard.jpg)

**Step 4 :** Click **"Import an existing project"**

![netlify_save](screenshot/net_save.png)

**Step 5 :** Select your repository from Github

![netlify_repo](screenshot/net_repo.png)

**Step 6 :** Pick an Owner

**Step 7 :** Pick branch main

**Step 8 :** Click **Deploy Site**

![netlify_deploy](screenshot/net_deploy.png)

**Step 9 :** After you deploy, you will get the site name

**Step 10:** Click **Domain Settings**

![netlify_domain_setting](screenshot/net_domain.png)

**Step 11:** Choose the site name and Edit the site name

**Step 12:** Fill the site name and Click **Save**

![netlify_changesite](screenshot/net_changesite.png)

### Custom DNS

After you have done **Buy Domain & Set Up Netlify**, now we set up the Custom DNS.

**Step 1:** Login or create a new ID at [Cloudfare](https://www.cloudflare.com/).

**Step 2:** Enter the Domain that you bought in **Niagahoster**

![cloud_domain](screenshot/cloud_domain-2.png)

**Step 3 :** Go To DNS Tab - Click "Add Record"

![dnsrecord_setup](screenshot/cloud_addrecord.png)

**Step 4 :** Choose the type to **"CNAME"**

**Step 5 :** Name **@** 

**Step 6 :** Copy and Paste your **Netlify** Subdomain to Target & Click **Save**

![dnsrecord_newrecord](screenshot/dnsrecord_setup.png)

**Step 7:** Go To **"Domain Settings"** on **Netlify**.

![net_domainset](screenshot/net_domainset.png)

**Step 8:** Click **Add a domain**.

![net_adddomain](screenshot/net_adddomain.png)

**Step 9::** Enter your Custom Domain Name that you bought at **Niagahoster** and Click **Verify**.

![net_setupdomain](screenshot/net_setupdomain.png)

**Step 10 :** Done, your domain is now the main domain.

![primary_domain](screenshot/../img/primary_domain.png)

### Change Your Nameservers

Don't forget change your Nameserver value

**Step 1 :** Go To **Niagahoster** and Click **Kelola Layanan**.

![niaga_dashboard](screenshot/niaga_dashboard.png)

**Step 2 :** Go to tab Overview Domain and Click **Change Nameserver**.

![niaga_change](screenshot/niaga_change.png)

**Step 3 :** Go to **Cloudfare** DNS Tab and see Cloudfare Nameserver and copy server values.

![cloud_value](screenshot/cloud_value.png)

**Step 4 :** The value copied on **Cloudflare**, paste the value in Update Nameserver on **Niagahoster** and Click **Save**.

![niaga_update](iscreenshotmg/niaga_update.png)

Done Now Your Value Nameserver arleady change.

![niaga_value](screenshot/niaga_value.png)

### Website Launch

After we have done all the steps above, we wait for the nameserver status to be **active** on **Cloudflare**.

![cloud_active](screenshot/cloud_active.png)

or you can get notification in email, if server arleady **active**.

![cloud_email](screenshot/cloud_email.png)

</details>

## Media Query Picture

So I made three media queries:
**For Mobile devices: 320px–480px**
**For Tablet or iPad: 480px–768px**
**For Laptops or small screen sizes: 768px–1024px**

Below, I will show the view that I created.

<figure>
  <img src="screenshot/media_mobile.png" alt="mobile device" style="display:block; margin: 0px auto;">  
  <figcaption style="text-align: center;">For Mobile Screen Sizes </figcaption>
</figure>

<figure>
  <img src="screenshot/media_table.png" alt="table or ipad devices" style="display:block; margin: 0px auto;">  
  <figcaption style="text-align: center;">For Tablet or Ipad Screen Sizes </figcaption>
</figure>

<figure>
  <img src="screenshot/media_laptop.png" alt="laptop screen size" style="display:block; margin: 0px auto;">  
  <figcaption style="text-align: center;">For Laptop Screen Size </figcaption>
</figure>
