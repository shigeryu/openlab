#!/usr/bin/env python3
"""
AGU ISR Lab 出席管理システム - 簡易サーバー起動スクリプト

使用方法:
    python3 setup.py

または:
    python setup.py

アクセス:
    http://localhost:8000
"""

import http.server
import socketserver
import webbrowser
import sys
import os
from pathlib import Path

def main():
    # ポート番号
    PORT = 8000
    
    # 現在のディレクトリがHTMLファイルがあるディレクトリか確認
    current_dir = Path.cwd()
    
    if not (current_dir / "index.html").exists():
        print("❌ エラー: index.htmlが見つかりません。")
        print("   このスクリプトはindex.htmlと同じディレクトリで実行してください。")
        return 1
    
    # サーバーの設定
    Handler = http.server.SimpleHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print("🚀 AGU ISR Lab 出席管理システム - サーバー起動中...")
            print(f"📍 サーバーアドレス: http://localhost:{PORT}")
            print(f"📁 公開ディレクトリ: {current_dir}")
            print("🌐 ブラウザが自動で開きます...")
            print("⏹️  停止するには Ctrl+C を押してください")
            print("-" * 50)
            
            # ブラウザを自動で開く
            webbrowser.open(f'http://localhost:{PORT}')
            
            # サーバー開始
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n⏹️  サーバーを停止しました。")
        print("お疲れ様でした！")
        return 0
        
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ エラー: ポート {PORT} は既に使用されています。")
            print("   他のアプリケーションでポートが使用されていないか確認してください。")
            print("   または、以下のコマンドで他のポートを試してください:")
            print(f"   python3 -m http.server 8001")
        else:
            print(f"❌ エラー: {e}")
        return 1

if __name__ == "__main__":
    sys.exit(main()) 