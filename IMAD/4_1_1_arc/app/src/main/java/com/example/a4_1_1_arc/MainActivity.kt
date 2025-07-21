package com.example.a4_1_1_arc

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView
import com.example.a4_1_1_arc.R

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val artView = findViewById<TextView>(R.id.resultOutput)

        var art = ""
        var i = 1

        while (i <= 7) {
            var j = 1
            while (j <= i) {
                art += "* "
                j++
            }
            art += "\n"
            i++
        }

        artView.text = getString(R.string.app_name)
    }
}
