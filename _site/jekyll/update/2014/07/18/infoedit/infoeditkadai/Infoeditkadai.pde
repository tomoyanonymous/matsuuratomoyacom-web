/*
 * 情報編集(web)2014
 * 最終課題制作テンプレート
 * 2014.07.11
 *
 */

EneTable ene; //ファイル読込のためのクラス
String[] filelist; //データファイル名リスト
int dataNum = 0; //データ番号
int hour = 0; //現在の時間（0〜23）

PVector[] pos = new PVector[110];
PVector[] vel = new PVector[110];
PVector[] rad = new PVector[110];
PVector[] rad2 =new PVector[110];
PVector[] endpoint = new PVector[110];
PFont font;
float ang = PI/12;
//初期化
void setup() {
  // 画面初期化
  size(800, 600,P2D);
  font = createFont("Menlo",32);
  textFont(font);
  colorMode(HSB,110);
  fill(0);
  background(0);
  frameRate(24);
  textSize(14);
  // ファイルリストの読み込み
  filelist = loadStrings("filelist.txt"); 
  // データ読み込み用クラスEneTableをインスタンス化（初期化）
  ene = new EneTable(filelist[dataNum]);
  for(int i=0; i<pos.length ;i++){
  pos[i]= new PVector(random(width),random(height));
  vel[i]= new PVector(random(-10,10),random(-10,10));
  rad[i]= new PVector(0,-1);
  rad2[i]=new PVector(0,-1);
  endpoint[i]= new PVector();
  

  }


 

}

// 結果を表示
void draw() {
  // 背景 及び前の描画を消去
  
  fill(0,10);
  rect(0,0,width,height);
  //blendMode(ADD);

 
  // ================================================
  // !!!!! このループ内でデータを表現する !!!!

   for (int i = 0; i < ene.data.length-1; i++) {
    strokeWeight(1);
    stroke(i,110,110,90);
    fill(i,110,110,5);
    //rad[i].normalize();
   rad[i].set(0,-1); 
   rad[i].set(rad[i].x * cos(TWO_PI/24*hour) - rad[i].y * sin(TWO_PI/24*hour), 
                 rad[i].x * sin(TWO_PI/24*hour) + rad[i].y * cos(TWO_PI/24*hour));

       
rad[i].mult(ene.data[i][hour]/2);

    //円
    ellipse(pos[i].x, pos[i].y, ene.data[i][hour],ene.data[i][hour]);
    //時計の針部分
    line(pos[i].x, pos[i].y, pos[i].x+rad[i].x, pos[i].y+rad[i].y);
     stroke(i,80,110,110);
     fill(i,110,110,110);
     ellipse(pos[i].x+rad[i].x, pos[i].y+rad[i].y,4,4);
     
     
       strokeWeight(3);
       //軌跡
       line(pos[i].x + rad[i].x, pos[i].y + rad[i].y, rad2[i].x, rad2[i].y);
 
   rad2[i].set(pos[i].x + rad[i].x, pos[i].y + rad[i].y);
   

  // rad[i].rotate(TAU/24);

    

   
  };

  // ================================================

  // 日付を画面に出力
 // blendMode(BLEND);



  fill(110,110);
  
  text(ene.date + " "  + hour + ":00", 5, 20);

  // データ番号を更新
  hour++;
  if (hour > 23) {
    hour = 0;
    dataNum++;
    // もしファイル数よりも多ければ最初に戻る
    if (dataNum > filelist.length - 1) {
      dataNum = 0;
    }
    // クラスを再度初期化して次のデータファイルを読み込む
    ene = new EneTable(filelist[dataNum]);
  }

}

// EneTable
// 電力データ読み込み用クラス

class EneTable {
  String date;  // 日付
  int data[][]; // データ

  // コンストラクタ（初期化関数）
  // ファイルを指定して、データをパース
  EneTable(String filename) {
    String[] rows = loadStrings(filename);
    String[] header = split(rows[0], ",");
    date = header[1];    
    data = new int[rows.length - 1][];

    for (int i = 1; i < rows.length - 1; i++) {
      int[] row = int(split(rows[i], ","));
      data[i - 1] = (int[]) subset(row, 1);
    }
  }

  //行の最小値を求める
  float getRowsMin(int row) {
    float m = Float.MAX_VALUE;
    for (int col = 0; col < data[row].length; col++) {
      if (data[row][col] < m) {
        m = data[row][col];
      }
    }
    return m;
  }
  
  //行の最大値を求める
  float getRowsMax(int row) {
    float m = -Float.MAX_VALUE;
    for (int col = 0; col < data[row].length; col++) {
      if (data[row][col] > m) {
        m = data[row][col];
      }
    }
    return m;
  }
}

