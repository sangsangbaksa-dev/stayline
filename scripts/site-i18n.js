/* Extra strings for the generated site: SEO meta, nav, legal pages. {email} is filled from config.js. */
module.exports = {
  en: {
    metaTitle: 'Stayline: Schengen 90/180 day counter and stay-limit planner',
    metaDesc: 'Estimate days used, days remaining and possible return dates under the rule you select. Schengen 90/180, a 183-day count, or a custom limit. Day counts are not immigration or tax decisions. No account required, no location tracking, one payment.',
    ogAlt: 'Stayline showing 62 days left on a Schengen 90/180 counter',
    privacy: 'Privacy', terms: 'Terms', home: 'Home', contact: 'Contact', updated: 'Last updated: November 2026',
    privH: 'Privacy', termsH: 'Terms',
    priv: [
      'The trips you enter are stored in this browser on your device (local storage). They are not sent to us or to anyone else unless you choose the optional cloud backup: if you log in with an email and password, a copy of your counters and trips (not your licence key) is stored with our database provider, Supabase, so you can use it on another device. A short device label from the browser can be stored with that copy. You can log out at any time. Logging out ends the session on this device and does not remove the cloud copy. Without logging in, Stayline needs no account and does not ask for your location. These pages do not load an analytics script, and the app code does not set a cookie. That does not describe every cookie a host might set.',
      'Clearing this browser\'s site data removes the trips stored on this device. Use Backup in the app if you want a file copy. Clearing site data does not, by itself, remove an optional cloud copy. The app has no control that deletes a cloud copy.',
      'Share link (optional): when you create a read-only share link, your trips (without notes) are packed into the part of the link after #. Browsers do not send that part to any server, so we never receive it, but anyone who has the link can see those trips. Share it only with people you trust.',
      'When you activate Pro, this device sends your licence key to our licence-check service. When that service is turned on, it sends the key on to the payment provider to check it. The body of that check is the key. Network requests can also carry technical data such as IP addresses. If the service is not turned on, or this device does not get a usable answer, it falls back to a check that runs in the page. A key the provider rejects is not accepted. If the request fails before any response arrives, Pro stays locked. Payments are handled by the payment provider under its own privacy policy.',
      'Cloudflare Pages hosts this site and may process request metadata under its privacy policy.',
      'Questions: {email}.'
    ],
    term: [
      'Stayline gives estimates calculated from the dates you enter. It is not legal or immigration advice. Border officers and official government sources decide how your days are counted, and you are responsible for your own stay. To the extent the law allows, we are not liable for fines, refused entry or overstays.',
      'Pro is a one-time purchase that unlocks extra features on the devices where you enter your licence key. The key is for your own use. Please do not share it publicly.',
      'Refunds: if Pro does not work for you, write to {email} within 14 days of purchase and we will refund you. Rights you have under the law where you live are not affected.',
      'Trips are stored on your device by default. If you sign in to optional cloud backup, a copy is stored with Supabase. Keep your own backups. Recovery is not guaranteed.',
      'We may update these terms and the app. The date above shows the latest version.',
      'Contact: {email}.'
    ]
  },
  ko: {
    metaTitle: '스테이라인: 솅겐 90/180일 계산기와 체류 한도 플래너',
    metaDesc: '선택한 규칙으로 사용한 날, 남은 날, 가능한 귀국일을 추정합니다. 솅겐 90/180, 183일 집계 또는 직접 정한 한도. 일수는 출입국이나 세무 결정이 아닙니다. 계정 불필요, 위치 추적 없이 한 번 결제.',
    ogAlt: '솅겐 90/180 카운터에서 62일 남음을 보여 주는 스테이라인',
    privacy: '개인정보', terms: '이용약관', home: '홈', contact: '문의', updated: '최종 수정: 2026년 11월',
    privH: '개인정보', termsH: '이용약관',
    priv: [
      '입력한 체류 기록은 이 기기의 브라우저(로컬 저장소)에 저장되며, 선택 기능인 클라우드 백업을 켜지 않으면 저희나 다른 곳으로 전송되지 않습니다. 이메일과 비밀번호로 로그인하면 다른 기기에서도 쓸 수 있도록 카운터와 체류 기록의 사본(라이선스 키 제외)이 데이터베이스 제공업체 Supabase에 저장됩니다. 브라우저의 짧은 기기 표시도 그 사본과 함께 저장될 수 있습니다. 로그아웃은 언제든 가능합니다. 로그아웃은 이 기기의 세션을 끝내며 클라우드 사본을 지우지 않습니다. 로그인하지 않으면 계정이 필요 없고 위치 정보도 요청하지 않습니다. 이 페이지는 분석 스크립트를 불러오지 않으며, 앱 코드는 쿠키를 설정하지 않습니다. 호스트가 설정할 수 있는 모든 쿠키를 설명하는 것은 아닙니다.',
      '이 브라우저의 사이트 데이터를 지우면 이 기기에 저장된 체류 기록이 삭제됩니다. 파일 사본이 필요하면 앱의 백업을 사용하세요. 사이트 데이터를 지워도 선택적 클라우드 사본이 그 자체로 지워지지는 않습니다. 앱에는 클라우드 사본을 삭제하는 기능이 없습니다.',
      '공유 링크(선택): 읽기 전용 공유 링크를 만들면 체류 기록(메모 제외)이 링크의 # 뒷부분에 담깁니다. 브라우저는 이 부분을 서버로 보내지 않으므로 운영자는 받지 않지만, 링크를 가진 사람은 누구나 그 기록을 볼 수 있습니다. 믿을 수 있는 사람에게만 공유하세요.',
      'Pro를 활성화하면 이 기기는 라이선스 키를 저희 라이선스 확인 서비스로 보냅니다. 그 서비스가 켜져 있으면 키를 결제 대행사로 보내 확인합니다. 그 확인의 본문은 키입니다. 네트워크 요청에는 IP 주소 같은 기술 정보가 함께 갈 수 있습니다. 서비스가 꺼져 있거나 이 기기가 쓸 수 있는 응답을 받지 못하면, 페이지 안에서 실행되는 확인으로 넘어갑니다. 결제 대행사가 거부한 키는 받아들여지지 않습니다. 응답이 오기 전에 요청이 실패하면 Pro는 잠긴 채로 있습니다. 결제는 해당 대행사의 개인정보 정책에 따라 처리됩니다.',
      '이 사이트는 Cloudflare Pages에서 호스팅되며, Cloudflare는 자신의 개인정보 정책에 따라 요청 메타데이터를 처리할 수 있습니다.',
      '문의: {email}'
    ],
    term: [
      '스테이라인은 입력한 날짜로 계산한 추정치를 제공합니다. 법률 또는 이민 자문이 아닙니다. 체류 일수를 어떻게 세는지는 출입국 심사관과 정부 공식 자료가 판단하며, 체류에 대한 책임은 이용자에게 있습니다. 법이 허용하는 범위에서 벌금, 입국 거부, 불법 체류에 대해 저희는 책임지지 않습니다.',
      'Pro는 한 번 결제하는 상품으로, 라이선스 키를 입력한 기기에서 추가 기능을 엽니다. 키는 본인 사용 용도이며 공개적으로 공유하지 마세요.',
      '환불: Pro가 맞지 않으면 구매 후 14일 이내에 {email}로 연락 주시면 환불해 드립니다. 거주 지역 법률에 따른 이용자의 권리는 영향을 받지 않습니다.',
      '체류 기록은 기본적으로 이용자의 기기에 저장됩니다. 선택 기능인 클라우드 백업에 로그인하면 사본이 Supabase에 저장됩니다. 따로 백업해 두세요. 복구는 보장되지 않습니다.',
      '약관과 앱은 변경될 수 있으며, 위의 날짜가 최신 버전을 나타냅니다.',
      '문의: {email}'
    ]
  },
  ja: {
    metaTitle: 'ステイライン：シェンゲン90/180日カウンターと滞在上限プランナー',
    metaDesc: '選んだルールで、使った日数、残り日数、戻れる可能性のある日を推定します。シェンゲン90/180、183日の日数集計、または自分で決めた上限。日数は出入国や税の判断ではありません。アカウント不要、位置情報なし、買い切り。',
    ogAlt: 'シェンゲン90/180カウンターで残り62日を表示するステイライン',
    privacy: 'プライバシー', terms: '利用規約', home: 'ホーム', contact: 'お問い合わせ', updated: '最終更新：2026年11月',
    privH: 'プライバシー', termsH: '利用規約',
    priv: [
      '入力した滞在記録は、お使いの端末のブラウザ（ローカルストレージ）に保存されます。任意のクラウドバックアップを使わない限り、当方や第三者には送られません。メールアドレスとパスワードでログインすると、他の端末で使えるよう、カウンターと滞在記録のコピー（ライセンスキーを除く）がデータベース事業者 Supabase に保存されます。ブラウザの短い端末表示もそのコピーと一緒に保存されることがあります。ログアウトはいつでもできます。ログアウトはこの端末のセッションを終わらせるだけで、クラウドのコピーは消しません。ログインしなければアカウントは不要で、位置情報も求めません。これらのページは解析スクリプトを読み込まず、アプリのコードは Cookie を設定しません。これはホストが設定し得るすべての Cookie を説明するものではありません。',
      'このブラウザのサイトデータを消すと、この端末に保存された滞在記録は削除されます。ファイルの控えが必要ならアプリのバックアップを使ってください。サイトデータを消しても、任意のクラウドコピーがその操作だけで消えるわけではありません。アプリにはクラウドコピーを削除する操作がありません。',
      '共有リンク(任意)：読み取り専用の共有リンクを作ると、滞在記録(メモを除く)がリンクの # 以降に入ります。ブラウザはこの部分をサーバーに送らないため運営者は受け取りませんが、リンクを持つ人は誰でもその記録を見られます。信頼できる相手にだけ共有してください。',
      'Pro を有効にすると、この端末はライセンスキーを当方のライセンス確認サービスへ送ります。そのサービスが有効なら、キーを決済事業者へ送って確認します。その確認の本文はキーです。ネットワークリクエストには IP アドレスなどの技術情報が含まれることがあります。サービスが無効か、この端末が使える応答を受け取れない場合は、ページ内で動く確認に戻ります。決済事業者が拒否したキーは受け入れられません。応答が届く前にリクエストが失敗すると、Pro はロックされたままです。決済は事業者のプライバシーポリシーに従って処理されます。',
      'このサイトは Cloudflare Pages でホスティングされており、Cloudflare は自社のプライバシーポリシーに従ってリクエストのメタデータを処理することがあります。',
      'お問い合わせ：{email}'
    ],
    term: [
      'ステイラインは入力された日付から計算した目安を提供します。法律・入国管理に関する助言ではありません。日数の数え方は入国審査官と政府の公式情報が判断し、滞在の責任は利用者にあります。法が許す範囲で、罰金、入国拒否、超過滞在について当方は責任を負いません。',
      'Pro は買い切りで、ライセンスキーを入力した端末で追加機能が使えます。キーは本人用です。公開しないでください。',
      '返金：Pro が合わない場合は、購入から14日以内に {email} までご連絡ください。返金します。お住まいの地域の法律上の権利は影響を受けません。',
      '滞在記録は、初期状態では端末に保存されます。任意のクラウドバックアップにログインすると、コピーが Supabase に保存されます。ご自身でも控えを残してください。復元は保証されません。',
      '規約とアプリは更新されることがあります。上の日付が最新版を示します。',
      'お問い合わせ：{email}'
    ]
  },
  zh: {
    metaTitle: '停留线：申根90/180天计数器与停留上限规划',
    metaDesc: '按所选规则估算已用天数、剩余天数和可能返回的日期。申根90/180、183天计数或自定义上限。天数不是出入境或税务决定。无需账号、不追踪位置，一次付费。',
    ogAlt: '停留线在申根90/180计数器上显示还剩62天',
    privacy: '隐私', terms: '条款', home: '首页', contact: '联系', updated: '最后更新：2026年11月',
    privH: '隐私', termsH: '条款',
    priv: [
      '你填写的行程保存在此设备的浏览器中（本地存储）。除非你选择可选的云备份，否则不会发送给我们或任何人。如果你用邮箱和密码登录，计数器和行程的副本（不含许可证密钥）会存放在数据库服务商 Supabase，以便在其他设备使用。浏览器提供的简短设备标识也可能随该副本保存。你可以随时退出登录。退出登录会结束此设备上的会话，不会删除云端副本。不登录则无需账号，也不会请求你的位置。这些页面不加载统计脚本，应用代码也不设置 Cookie。这并不说明托管方可能设置的每一种 Cookie。',
      '清除此浏览器的网站数据会删除保存在此设备上的行程。如需文件副本，请使用应用中的备份。清除网站数据本身不会删除可选的云端副本。应用里没有删除云端副本的操作。',
      '分享链接（可选）：创建只读分享链接时，你的行程（不含备注）会放在链接 # 之后的部分。浏览器不会把这部分发送给任何服务器，所以我们收不到，但拿到链接的人都能看到这些行程。请只分享给信任的人。',
      '激活 Pro 时，此设备会把许可证密钥发送到我们的许可证校验服务。若该服务已开启，服务会把密钥转给支付服务商以验证是否有效。该次校验的正文是密钥。网络请求还可能携带 IP 地址等技术数据。若服务未开启，或此设备没有收到可用的答复，则会改用在页面中运行的检查。支付服务商拒绝的密钥不会被接受。如果请求在任何答复到达前失败，Pro 保持锁定。付款由支付服务商按其隐私政策处理。',
      '本站由 Cloudflare Pages 托管，Cloudflare 可能按其隐私政策处理请求元数据。',
      '问题请联系：{email}'
    ],
    term: [
      '停留线根据你填写的日期给出估算，不构成法律或移民建议。天数如何计算由边检人员和政府官方信息决定，你需自行对自己的停留负责。在法律允许的范围内，对于罚款、拒绝入境或逾期停留，我们不承担责任。',
      'Pro 为一次性购买，在你输入授权密钥的设备上解锁额外功能。密钥仅供本人使用，请勿公开分享。',
      '退款：如果 Pro 不适合你，请在购买后 14 天内联系 {email}，我们会退款。你所在地法律赋予你的权利不受影响。',
      '行程默认保存在你的设备上。如果登录可选的云备份，一份副本会存放在 Supabase。请自行另行备份。不保证能够恢复。',
      '我们可能更新条款和应用，以上日期为最新版本。',
      '联系：{email}'
    ]
  },
  es: {
    metaTitle: 'Stayline: contador Schengen 90/180 y planificador de límites de estancia',
    metaDesc: 'Estima los días usados, los que quedan y posibles fechas de regreso según la regla que elijas. Schengen 90/180, un recuento de 183 días o un límite propio. El recuento no es una decisión migratoria ni fiscal. Sin cuenta, sin rastreo de ubicación, un solo pago.',
    ogAlt: 'Stayline mostrando 62 días restantes en un contador Schengen 90/180',
    privacy: 'Privacidad', terms: 'Términos', home: 'Inicio', contact: 'Contacto', updated: 'Última actualización: noviembre de 2026',
    privH: 'Privacidad', termsH: 'Términos',
    priv: [
      'Los viajes que introduces se guardan en el navegador de tu dispositivo (almacenamiento local). No se envían a nosotros ni a nadie salvo que actives la copia opcional en la nube: si inicias sesión con correo y contraseña, se guarda una copia de tus contadores y viajes (sin la clave de licencia) en nuestro proveedor de base de datos, Supabase, para usarla en otro dispositivo. Con esa copia puede guardarse una etiqueta breve del dispositivo que envía el navegador. Puedes cerrar sesión cuando quieras. Cerrar sesión termina la sesión en este dispositivo y no borra la copia en la nube. Sin iniciar sesión no hace falta cuenta y Stayline no pide tu ubicación. Estas páginas no cargan un script de analítica y el código de la app no establece una cookie. Eso no describe todas las cookies que podría establecer un alojamiento.',
      'Borrar los datos del sitio en este navegador elimina los viajes guardados en este dispositivo. Usa la copia de seguridad de la app si quieres un archivo. Borrar los datos del sitio no elimina, por sí solo, una copia opcional en la nube. La app no tiene un control que borre la copia en la nube.',
      'Enlace para compartir (opcional): al crear un enlace de solo lectura, tus viajes (sin notas) van en la parte del enlace después de #. Los navegadores no envían esa parte a ningún servidor, así que no la recibimos, pero cualquiera con el enlace puede ver esos viajes. Compártelo solo con personas de confianza.',
      'Al activar Pro, este dispositivo envía tu clave de licencia a nuestro servicio de comprobación. Cuando ese servicio está activado, envía la clave al proveedor de pagos para comprobarla. El cuerpo de esa comprobación es la clave. Las solicitudes de red también pueden incluir datos técnicos como direcciones IP. Si el servicio no está activado, o este dispositivo no recibe una respuesta utilizable, vuelve a una comprobación que se ejecuta en la página. Una clave que el proveedor rechaza no se acepta. Si la solicitud falla antes de que llegue alguna respuesta, Pro permanece bloqueado. El proveedor procesa los pagos según su propia política de privacidad.',
      'Cloudflare Pages aloja este sitio y puede tratar metadatos de la solicitud según su política de privacidad.',
      'Preguntas: {email}.'
    ],
    term: [
      'Stayline ofrece estimaciones calculadas con las fechas que introduces. No es asesoramiento legal ni migratorio. Los agentes de frontera y las fuentes oficiales deciden cómo se cuentan tus días, y tú eres responsable de tu estancia. En la medida que permita la ley, no respondemos por multas, denegaciones de entrada ni estancias excedidas.',
      'Pro es una compra única que desbloquea funciones extra en los dispositivos donde introduces tu clave de licencia. La clave es para tu uso personal; no la compartas públicamente.',
      'Reembolsos: si Pro no te sirve, escribe a {email} dentro de los 14 días posteriores a la compra y te reembolsamos. Los derechos que tengas por ley en tu país no se ven afectados.',
      'Los viajes se guardan en tu dispositivo de forma predeterminada. Si inicias sesión en la copia opcional en la nube, se guarda una copia en Supabase. Conserva tus propias copias. La recuperación no está garantizada.',
      'Podemos actualizar estos términos y la app. La fecha de arriba indica la última versión.',
      'Contacto: {email}.'
    ]
  }
};
