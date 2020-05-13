# Pleroman asennus OpenBSD:ll辰

Tarvitset:
* Oman domainin
* OpenBSD 6.3 -serverin
* Auttavan ymm辰rryksen unix-j辰rjestelmist辰

Komennot, joiden edess辰 on '#', tulee ajaa k辰ytt辰j辰n辰 `root`. T辰m辰 on
suositeltavaa tehd辰 komennon `doas` avulla, katso `doas (1)` ja `doas.conf (5)`.
T辰st辰 eteenp辰in oletuksena on, ett辰 domain "esimerkki.com" osoittaa
serverin IP-osoitteeseen.

Jos asennuksen kanssa on ongelmia, IRC-kanava #pleroma Freenodessa tai
Matrix-kanava #freenode_#pleroma:matrix.org ovat hyvi辰 paikkoja l旦yt辰辰 apua
(englanniksi), `/msg eal kukkuu` jos haluat v辰ltt辰m辰tt辰 puhua h辰rm辰辰.

Asenna tarvittava ohjelmisto:

`# pkg_add git elixir gmake postgresql-server-10.3 postgresql-contrib-10.3`

Luo postgresql-tietokanta:

`# su - _postgresql`

`$ mkdir /var/postgresql/data`

`$ initdb -D /var/postgresql/data -E UTF8`

`$ createdb`

K辰ynnist辰 tietokanta ja aseta se k辰ynnistym辰辰n automaattisesti.

`# rcctl start postgresql`

`# rcctl enable postgresql`

Luo k辰ytt辰j辰 pleromaa varten (kysyy muutaman kysymyksen):

`# adduser pleroma`

Vaihda pleroma-k辰ytt辰j辰辰n ja mene kotihakemistoosi:

`# su - pleroma`

Lataa pleroman l辰hdekoodi:

`$ git clone -b stable https://git.pleroma.social/pleroma/pleroma.git`

`$ cd pleroma`

Asenna tarvittavat elixir-kirjastot:

`$ mix deps.get`

`$ mix deps.compile`

Luo tarvittava konfiguraatio:

`$ mix generate_config`

`$ cp config/generated_config.exs config/prod.secret.exs`

Aja luodut tietokantakomennot:

`# su _postgres -c 'psql -f config/setup_db.psql'`

`$ MIX_ENV=prod mix ecto.migrate`

K辰ynnist辰 pleroma-prosessi:

`$ MIX_ENV=prod mix compile`

`$ MIX_ENV=prod mix phx.server`

T辰ss辰 vaiheessa on hyv辰 tarkistaa ett辰 asetukset ovat oikein. Avaa selaimella,
curlilla tai vastaavalla ty旦kalulla `esimerkki.com:4000/api/v1/instance` ja katso
ett辰 kohta "uri" on "https://esimerkki.com".

Huom! Muista varmistaa ett辰 muuttuja MIX_ENV on "prod" mix-komentoja ajaessasi.
Mix lukee oikean konfiguraatiotiedoston sen mukaisesti.

Ohessa enimm辰kseen toimivaksi todettu rc.d-skripti pleroman k辰ynnist辰miseen.
Kirjoita se tiedostoon /etc/rc.d/pleroma. T辰m辰n j辰lkeen aja
`# chmod +x /etc/rc.d/pleroma`, ja voit k辰ynnist辰辰 pleroman komennolla
`# /etc/rc.d/pleroma start`.

```
#!/bin/ksh
#/etc/rc.d/pleroma

daemon="cd /home/pleroma/pleroma;MIX_ENV=prod /usr/local/bin/elixir"
daemon_flags="--detached /usr/local/bin/mix phx.server"
daemon_user="pleroma"
rc_reload="NO"
rc_bg="YES"

pexp="beam"

. /etc/rc.d/rc.subr

rc_cmd $1
```

T辰m辰n j辰lkeen tarvitset en辰辰 HTTP-serverin v辰litt辰m辰辰n kutsut pleroma-prosessille.
Tiedostosta `install/pleroma.nginx` l旦ytyy esimerkkikonfiguraatio, ja TLS-sertifikaatit
saat ilmaiseksi esimerkiksi [letsencryptilt辰](https://certbot.eff.org/lets-encrypt/opbsd-nginx.html).
Nginx asentuu yksinkertaisesti komennolla `# pkg_add nginx`.

Kun olet valmis, avaa https://esimerkki.com selaimessasi. Luo k辰ytt辰j辰 ja seuraa kiinnostavia
tyyppej辰 muilla palvelimilla!
