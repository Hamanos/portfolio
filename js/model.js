window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = 100;
  const height = 465;

  // レンダラーを作成
  const canvasElement = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvasElement,
    alpha: true, //背景を透明にする
    antialias: true, //アンチエイリアス
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  // シーンを作成
  const scene = new THREE.Scene();

  // カメラを作成
  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
  camera.position.set(0, 0, 600);

  // カメラコントローラーを作成
  const controls = new THREE.OrbitControls(camera, canvasElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.2;

  // 環境光源を作成
  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.intensity = 0.5;
  scene.add(ambientLight);

  // 平行光源を作成
  const directionalLight = new THREE.DirectionalLight(0xffffff);
  directionalLight.intensity = 1;
  directionalLight.position.set(1, 3, 1);
  scene.add(directionalLight);

  // 3Dモデルの読み込み
  const model = 'model2.obj';
  const objLoader = new THREE.OBJLoader();
  objLoader.load(
    model,
    function (obj) {
      scene.add(obj);
      obj.position.x = 0;
      obj.position.y = -110;
      obj.position.z = 290;
    },
  );

  // 追加 マウスの動きを取得
  let mouseX = 0,
    mouseY = 0; // マウス座標

  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = 200;

  function onDocumentMouseMove(event) {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  }
  document.addEventListener('mousemove', onDocumentMouseMove);

  function animationStart() {
    requestAnimationFrame(animationStart);

    camera.position.x += (-mouseX - camera.position.x) * 0.01;
    camera.position.y += (mouseY - camera.position.y) * 0.03;

    // 原点方向を見つめる
    camera.lookAt(scene.position);

    // model.rotation.y += 0.005;
    // model.rotation.x += 0.005;

    // レンダリング
    renderer.render(scene, camera);
  }
  animationStart();

  // ウインドウのリサイズ対応
  onWindowResize();
  window.addEventListener('resize', onWindowResize);

  function onWindowResize() {
    // ウインドウ幅を取得
    const width = window.innerWidth;
    // レンダラーのサイズを調整する
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    windowHalfX = window.innerWidth / 2;
    windowHalfY = 200;

    // カメラのアスペクト比を正す
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }

  // tick();

  // function tick() {
  //   requestAnimationFrame(tick);



  //   renderer.render(scene, camera); // レンダリング


  // }
}