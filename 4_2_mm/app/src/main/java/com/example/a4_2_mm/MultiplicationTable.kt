package com.example.a4_2_mm

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.TextView

class MultiplicationTable : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_multiplication_table)

        // get the table number from the bundle
        val bundle: Bundle? = intent.extras
        val tableString: String? = bundle?.getString("tableNumber")

        // convert the table number to an integer
        val tableNumber = tableString?.toInt()

        // display the heading so we can see the value in action
        val multiplicationTable = findViewById<TextView>(R.id.multiplicationTableTextView)

        multiplicationTable.text = "$tableNumber x table"
    }
}